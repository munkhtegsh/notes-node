//const os = require('os');
const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs'); //it reads --title and make it object

const notes = require('./notes.js');

const argv = yargs.argv; //using yargs to get argv (pretty same as process.argv)
var command = process.argv[2]; //getting command, it could be after =  'argv._[0]' as well
console.log('Command: ', command); //commands will be add, revmove, read etc
console.log('Process', process.argv); // array of argv

console.log('Yargs', argv); //it will be yargs obj, which contains --title, --body etc

if (command === 'add') {
	var note = notes._addNote(argv.title, argv.body);
	if (note === undefined) {
		console.log('title is duplicated')
	} else {
		console.log('no duplicated title')
	}

} else if (command === 'list') {
	var noteList = notes._getAll();
	if (noteList.length !== 0) {
		console.log(noteList.title);
	} else {
		console.log('Not found list');
	}
} else if (command === 'read') {
	let noteRead = notes._getNote(argv.title)[0];
	if (noteRead.length !== 0) {
		console.log(notes._logNote(noteRead));
	} else {
		console.log('Title not found');
	}
} else if (command === 'remove') {
	var noteRemoved = notes._removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Not recognized');
}

