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

const remove = id => {
    const notes = load();
    const toRemove = id - 1;
    
    if (notes[toRemove] == undefined) {
        return log.error(`Note doesn't exist!`);
    }

    save([...notes.slice(0, toRemove), ...notes.slice(toRemove + 1)]);
    return log.success('Note removed!');
};

const list = () => {
    const notes = load();
    if (notes.length === 0) return log.error('No notes found!');
    log.info(`===== Your Notes =====`);
    return notes.forEach((note, i) => {
        console.log(`${i + 1}: ${note.title}`);
    });
};

const load = () => {
    try {
        const data = fs.readFileSync('notes.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const read = id => {
    const notes = load();
    const toRead = id - 1;
    if (notes[toRead] == undefined) return log.error(`Note not found!`);

    return log.info(notes[toRead].body);
}

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
    list,
    read,
};
