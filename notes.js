const fs = require('fs');

const getNotes = function() {
    return "Here are your notes...";
};

const add = function(note) {
    const notes = load();

    if (notes.find(item => item.title === note.title)) {
        return console.error('Note title already exists!');
    }

    notes.push(note);
    save(notes);
    return console.log('Note added!');
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

module.exports = {
    getNotes,
    add,
}
