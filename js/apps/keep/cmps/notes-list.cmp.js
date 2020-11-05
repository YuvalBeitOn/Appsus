import noteControls from './note-controls.cmp.js';
import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js';
import videoNote from './video-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    props: ['notes'],
    template: `
    <section v-if="notes.length" class="notes-list-container">
        <ul class="notes-list clean-list ">
            <component 
                v-for="note in notes" 
                :is="note.type"
                :style="{backgroundColor:note.bgc}"
                :key="note.id" 
                :note="note"
                :editNote="editNote">
                    <note-controls :note="note"></note-controls>
            </component>
        </ul>
    </section>`,
    methods: {
        editNote(data) {
            eventBus.$emit('editNote', data)
        }
    },
    components: {
        noteControls,
        textNote,
        imgNote,
        todoNote,
        videoNote,
    },
}