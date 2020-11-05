import { utilService } from '../../../services/util.service.js'

const STORAGE_KEY = 'notes';

const notes = createNotes();

export default {
    addNote,
    getNotes,
    deleteNote,
    updateNoteProp,
    cloneNote,
    createNotes,
    editNote,
    sendNote,
    getNoteTypeById
}

function createNotes() {
    var notes = utilService.loadFromStorage(STORAGE_KEY);
    if (notes) return notes;
    else notes = [{
            "type": "textNote",
            "id": utilService.makeId(),
            "isPinned": false,
            "info": { "txt": "Fullstack Me Baby!" },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": "imgNote",
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                "txt": 'Take a trip around the world...',
                "url": "https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768"
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": "todoNote",
            "id": utilService.makeId(),
            "isPinned": false,
            "info": {
                todos: [{ txt: 'Drink coffee', isDone: true },
                    { txt: 'Go to sleep', isDone: false }
                ]
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'videoNote',
            "id": utilService.makeId(),
            "isPinned": false,
            "info": {
                "txt": 'Vue',
                "url": 'https://www.youtube.com/watch?v=nhBVL41-_Cw',

            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'videoNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                "txt": 'Static&Benel',
                "url": 'https://www.youtube.com/watch?v=-2EZbz22iNg&ab_channel=StaticandBenEl-%D7%A1%D7%98%D7%98%D7%99%D7%A7%D7%95%D7%91%D7%9F%D7%90%D7%9C',

            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'todoNote',
            id: utilService.makeId(),
            "isPinned": true,
            "info": {
                todos: [
                    { txt: `Don't afraid from errors`, isDone: true },
                    { txt: 'Do push and pull', isDone: false }
                ]
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'textNote',
            id: utilService.makeId(),
            "isPinned": true,
            "info": { "txt": "Make this app amazing!" },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'videoNote',
            id: utilService.makeId(),
            "isPinned": true,
            "info": {
                "txt": 'Babys',
                "url": 'https://www.youtube.com/watch?v=HpUT7OCbcJU',
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'videoNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                "txt": 'Great song',
                "url": 'https://www.youtube.com/watch?v=iaGjz4dtr3o&list=RDiaGjz4dtr3o&start_radio=1&ab_channel=BakermatVEVO',

            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'todoNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                todos: [
                    { txt: 'Drink coffee', isDone: false },
                    { txt: 'Go to sleep', isDone: true }
                ]
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'todoNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                todos: [
                    { txt: 'Make fake data properly', isDone: false },
                    { txt: 'Debug your code', isDone: true }
                ]
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'textNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                txt: `It will be worth it in the end...`
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
        {
            "type": 'textNote',
            "id": utilService.makeId(),
            "isPinned": true,
            "info": {
                txt: `here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `
            },
            "bgc": 'rgba(219, 186, 188, 0.8)',
            "onEdit": false
        },
    ]
    utilService.storeToStorage(STORAGE_KEY, notes);
    return notes;
}

function getNoteTypeById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return note.type;
}

function sendNote(note) {
    let messegeContent;
    if (note.type === "textNote") messegeContent = note.info.txt;
    else if (note.type === "todoNote") {
        messegeContent = note.info.todos.map((todo, idx) => {
            return `${idx}. ${todo.txt}\n`
        }).join(',');
    } else messegeContent = `${note.info.txt}: \n ${note.info.url}`;
    console.log('messegeContent:', messegeContent);
    // this.$router.push(`/email/compose/new?type=${this.note.type}&body=${messegeContent}&title=${'title'}`);
}

function editNote(noteId, newVal, idx) {
    const note = notes.find(note => note.id === noteId);
    if (note.type !== 'todoNote') note.info.txt = newVal;
    else {
        note.info.todos[idx].txt = newVal;
        console.log('after edit:', note);
    }

    utilService.storeToStorage(STORAGE_KEY, notes);
}


function updateNoteProp(noteId, prop, value) {
    const noteToEdit = notes.find(note => {
        return note.id === noteId;
    });
    noteToEdit[prop] = value;
    utilService.storeToStorage(STORAGE_KEY, notes);
}

function getNotes() {
    return Promise.resolve(notes)
}

function cloneNote(note) {
    const newClone = JSON.parse(JSON.stringify(note));
    newClone.id = utilService.makeId();
    notes.push(newClone);
    utilService.storeToStorage(STORAGE_KEY, notes)

}

function deleteNote(noteId) {
    const idx = notes.findIndex(note => {
        return note.id === noteId
    });
    utilService.storeToStorage(STORAGE_KEY, notes)
}

function addNote(note) {
    if (note.type === 'todoNote') {
        const todos = note.info.txt.split(',');
        note.info.todos = todos.map(todo => {
            return { 'txt': todo, 'isDone': false }
        });
    }
    note.id = utilService.makeId();
    note.bgc = 'lightblue';
    note.onEdit = false;
    notes.push(note);
    utilService.storeToStorage(STORAGE_KEY, notes);
    return Promise.resolve(note);
}