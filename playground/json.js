// var obj = {
// 	name: 'Andrew'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
}

//originalNoteString
//if someone adds note we use this code to save it
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

//note
//if someone wants to read it, we use this code to read it
var note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title)