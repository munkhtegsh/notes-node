const fs = require('fs');

//checking the 'notes-data.json' exists in the .json file? if not create empty []
var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	};
};

//creating 'notes-data.json' file, have to stringify the cb or anything you're passing
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',  JSON.stringify(notes));
};

//Beginning of commands__________________________
module.exports = {
	_addNote: (title, body) => {
		//For demo purpose => console.log('Adding note', title, body);
		var notes = fetchNotes();
		var note = {
			title,
			body
		};

		var duplicateNotes = notes.filter((note) => {
			return note.title === title;
		});

		if (duplicateNotes.length === 0) {
			notes.push(note);
			saveNotes(notes);
			return note;
		}
	},

	_getAll: () => {
		// console.log('Getting all notes')
		let notes = fetchNotes();
		return notes.forEach(note => note)
	},

	_getNote: (title) => {
		// console.log('Reading notes', title);
		let notes = fetchNotes();
		return notes.filter(note => note.title === title);
	},

	_removeNote: (title) => {
		// console.log('Removing notes', title);
		let notes = fetchNotes(); //fetch notes
		const filtered =  notes.filter(note => note.title !== title); //removing one that match the title
		saveNotes(filtered); //save new notes arr

		return notes.length !== filtered.length;
	},

	_logNote: (note) => {
		debugger;
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);

	}
}

//End____________________________________________









// const fs = require('fs');

// //checking the 'notes-data.json' exists in the .json file? if not create empty []
// var fetchNotes = () => {
// 	try {
// 		var notesString = fs.readFileSync('notes-data.json');
// 		return JSON.parse(notesString);
// 	} catch(e) {
// 		return [];
// 	};
// };

// //creating 'notes-data.json' file, have to stringify the cb or anything you're passing
// var saveNotes = (notes) => {
// 	fs.writeFileSync('notes-data.json',  JSON.stringify(notes));
// };

// //Beginning of commands__________________________
// var addNote = (title, body) => {
// 	//For demo purpose => console.log('Adding note', title, body);
// 	var notes = fetchNotes();
// 	var note = {
// 		title,
// 		body
// 	};

// 	var duplicateNotes = notes.filter((note) => {
// 		return note.title === title;
// 	});

// 	if (duplicateNotes.length === 0) {
// 		notes.push(note);
// 		saveNotes(notes);
// 		return note;
// 	}
// };

// var getAll = () => {
// 	console.log('Getting all notes')
// }

// let getNote = (title) => {
// 	console.log('Reading notes', title);
// }

// let removeNote = (title) => {
// 	// console.log('Removing notes', title);
// 	let notes = fetchNotes(); //fetch notes
// 	const filtered =  notes.filter(note => note.title !== title); //removing one that match the title
// 	saveNotes(filtered); //save new notes arr

// 	return notes.length !== filtered.length;

// }

// //End____________________________________________


// module.exports = {
// 	addNote,
// 	getAll,
// 	getNote,
// 	removeNote
// };


