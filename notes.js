const fs = require('fs');

const getNotes = function() {
    return "Here are your notes...";
};

const add = function(note) {
    const notes = load();

    if (exists(note.title)) {
        return console.error('Note title already exists!');
    }

    notes.push(note);
    save(notes);
    return console.log('Note added!');
};

const remove = function(title) {
    const notes = load();
    const toRemove = notes.findIndex(note => title === note.title);
    
    if (toRemove < 0) {
        return console.error(`Note title doesn't exist!`);
    }

    save([...notes.slice(0, toRemove), ...notes.slice(toRemove + 1)]);
    return console.log('Note removed!');
};

const load = function() {
    try {
        const data = fs.readFileSync('notes.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const save = function(notes) {
    const notesJSON = JSON.stringify(notes);

    return fs.writeFileSync('notes.json', notesJSON);
}

const exists = function(title) {
    const notes = load();
    return !!notes.find(note => title === note.title);
}

module.exports = {
    getNotes,
    add,
    remove,
}
