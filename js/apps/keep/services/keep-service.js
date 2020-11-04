import { utilService } from '../../../services/util.service.js'

var notes = [{
        "type": "textNote",
        "isPinned": false,
        "info": { "txt": "Fullstack Me Baby!" },
        "id": "uh5IX"
    },
    {
        "type": "imgNote",
        "isPinned": true,
        "info": {
            "txt": 'This is an image',
            "url": "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk"
        },
        "id": "uh5I7"
    },
    {
        "type": "todoNote",
        "isPinned": false,
        "info": {
            todos: [{ txt: 'Drink coffee', isDone: true },
                { txt: 'Go to sleep', isDone: false }
            ]
        },
        "id": "uh5I8"
    }
]

export default {
    addNote,
    getNotes
}


function addNote(note) {
    if (note.type === 'todoNote') {
        let todos = note.info.txt.split(',');
        note.info.todos = todos.map(todo => {
            return { 'txt': todo, 'isDone': false }
        });
    }
    note.id = utilService.makeId();
    notes.push(note);
    return Promise.resolve(note);
}

function getNotes() {
    // load from storage
    return Promise.resolve(notes);
}

// function updateNoteProp(noteId, prop, value) {
//     let noteToEdit;
//     getById(noteId).then((note) => {
//         noteToEdit = note;
//         noteToEdit[prop] = value;
//         utilsService.storeToStorage(NOTES_KEY, gNotes);
//     });
// }