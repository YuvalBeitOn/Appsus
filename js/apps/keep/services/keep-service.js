import { utilService } from '../../../services/util.service.js'

var notes = [{
        "type": "textNote",
        "isPinned": false,
        "info": {
            "txt": "Fullstack Me Baby!"
        },
        "id": "uh5IX"
    },
    {
        "type": "imgNote",
        "isPinned": true,
        "info": {
            "txt": "Fullstack Me Baby!"
        },
        "id": "uh5IX"
    }
]

export default {
    addNote,
    getNotes
}

function addNote(note) {
    console.log('add note in service is runing', notes);
    note.id = utilService.makeId();
    notes.push(note);
    return Promise.resolve(note);
}

function getNotes() {
    // load from storage
    return Promise.resolve(notes);
}