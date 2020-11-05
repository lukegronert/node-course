const chalk = require('chalk');
const yargs = require('yargs');
const { removeNote } = require('./notes.js');
const notes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
        console.log("Listing notes")
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log("Reading note")
    }
});

// add, remove, read, list

yargs.parse()