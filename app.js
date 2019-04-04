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
        id: {
            describe: `ID of note to remove`,
            demandOption: true,
            type: `number`,
        },
    },
    handler: argv => {
        notes.remove(argv.id);
    },
});

yargs.command({
    command: `list`,
    description: `List all notes.`,
    handler: () => {
        notes.list();
    },
});

yargs.command({
    command: `read`,
    description: `Read a note from the list.`,
    builder: {
        id: {
            describe: `ID of note to read`,
            demandOption: true,
            type: `number`,
        }
    },
    handler: (argv) => {
        notes.read(argv.id);
    },
});

yargs.parse();
