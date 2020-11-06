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
            keepService.addNote(currNote)
                .then(() => eventBus.$emit("show-msg", { txt: 'Your Note is added!', type: 'alert-success' }));
        },
        editNote(data) {
            let noteType = keepService.getNoteTypeById(data.target.id)
            if (noteType === 'todoNote') {
                const todoIdx = data.target.attributes.idxintodos.value;
                keepService.editNote(data.target.id, data.target.innerText, todoIdx)
            } else keepService.editNote(data.target.id, data.target.innerText)
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