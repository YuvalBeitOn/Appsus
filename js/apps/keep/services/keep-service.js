import { utilService } from '../../../services/util.service.js'

var notes = [{
    type: "NoteText",
    isPinned: true,
    info: { txt: "Fullstack Me Baby!" }
}]

export default {
    addNote
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