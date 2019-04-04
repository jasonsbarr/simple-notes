const fs = require('fs');
const log = require('./logger');

const getNotes = () => {
    return "Here are your notes...";
};

const add = note => {
    const notes = load();

    if (exists(note.title)) {
        return log.error('Note title already exists!');
    }

    notes.push(note);
    save(notes);
    return log.success('Note added!');
};

const remove = title => {
    const notes = load();
    const toRemove = notes.findIndex(note => title === note.title);
    
    if (toRemove < 0) {
        return log.error(`Note title doesn't exist!`);
    }

    save([...notes.slice(0, toRemove), ...notes.slice(toRemove + 1)]);
    return log.success('Note removed!');
};

const load = () => {
    try {
        const data = fs.readFileSync('notes.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const save = notes => {
    const notesJSON = JSON.stringify(notes);

    return fs.writeFileSync('notes.json', notesJSON);
}

const exists = title => {
    const notes = load();
    return !!notes.find(note => title === note.title);
}

module.exports = {
    getNotes,
    add,
    remove,
}