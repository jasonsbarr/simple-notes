const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
    command: `add`,
    description: `Add a new note to the list`,
    handler: function() {
        console.log(`Adding a new note to the list!`);
    },
});

yargs.command({
    command: `remove`,
    description: `Remove a note from the list`,
    handler: function() {
        console.log(`Removing note from the list.`);
    },
});

yargs.command({
    command: `read`,
    description: `Read a note from the list.`,
    handler: function() {
        console.log(`Reading note...`);
    },
});

yargs.command({
    command: `list`,
    description: `List all notes.`,
    handler: function() {
        console.log(`Listing notes...`);
    },
});

console.log(yargs.argv);
