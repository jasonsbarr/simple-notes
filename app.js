const yargs = require('yargs');
const notes = require('./lib/notes');

// Create add command
yargs.command({
    command: `add`,
    description: `Add a new note to the list`,
    builder: {
        title: {
            describe: `Note title`,
            demandOption: true,
            type: `string`,
        },

        body: {
            describe: `Note body`,
            demandOption: true,
            type: `string`
        },
    },
    handler: argv => {
        notes.add({title: argv.title, body: argv.body});
    },
});

yargs.command({
    command: `remove`,
    description: `Remove a note from the list`,
    builder: {
        title: {
            describe: `Title of note to remove`,
            demandOption: true,
            type: `string`,
        },
    },
    handler: argv => {
        notes.remove(argv.title);
    },
});

yargs.command({
    command: `read`,
    description: `Read a note from the list.`,
    handler: () => {
        console.log(`Reading note...`);
    },
});

yargs.command({
    command: `list`,
    description: `List all notes.`,
    handler: () => {
        notes.list();
    },
});

yargs.parse();
