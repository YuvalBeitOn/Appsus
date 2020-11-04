import addNote from "../cmps/add-note.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import keepService from '../services/keep-service.js';


export default {
    template: `
    <section class="keep">
        <add-note  @addNote="addNote"/>
        <note-list :notes="notes"/>
    </section>

    `,
    data() {
        return {
            notes: [],
        }
    },
    methods: {
        addNote(currNote) {
            keepService.addNote(currNote);
        }
    },

    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
            })

    },
    components: {
        addNote,
        noteList
    },
}