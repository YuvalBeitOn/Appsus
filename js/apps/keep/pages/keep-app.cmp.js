import addNote from "../cmps/add-note.cmp.js"
import notesGallery from "../cmps/notes-gallery.cmp.js"
import keepService from '../services/keep-service.js';
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    name: 'keep-app',
    template: `
    <section class="keep">
        <add-note  @addNote="addNote"/>
        <notes-gallery v-if="notes" :notes="notes"/>
    </section>

    `,
    data() {
        return {
            notes: null,
        }
    },
    methods: {
        addNote(currNote) {
            console.log(currNote);
            keepService.addNote(currNote);
        },
        editNote(ev) {
            const todoIdx = ev.target.attributes.idxintodos.value;
            console.log('data in keepApp:', ev.target.attributes.idxintodos.value);
            if (todoIdx) keepService.editNote(ev.target.id, ev.target.innerText, todoIdx)
            else keepService.editNote(ev.target.id, ev.target.innerText)
        }
    },
    created() {
        eventBus.$on('editNote', this.editNote)
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
            })

    },
    components: {
        addNote,
        notesGallery,
    },
}