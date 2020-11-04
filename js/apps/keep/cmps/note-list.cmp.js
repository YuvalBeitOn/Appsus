import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js';
import videoNote from './video-note.cmp.js';


export default {
    props: ['notes'],
    template: `
    <section class="note-list">
        <h2 v-if="pinnedNotes.length">Pinned Notes</h2>
        <ul  v-if="pinnedNotes.length" class="pinned-notes clean-list flex space-around">
            <component v-for="note in pinnedNotes" :key="note.id" :is="note.type" :note="note"></component>
        </ul>
        <h2 v-if="unPinnedNotes.length">Other Notes</h2>
        <ul v-if="unPinnedNotes.length" class="unPinned-notes clean-list flex space-around">
            <component v-for="note in unPinnedNotes" :key="note.id" :is="note.type" :note="note"></component>
        </ul>
    </section>
    `,
    computed: {
        pinnedNotes() {
            return this.notes.filter(note => {
                if (note.isPinned) return note;
            })
        },
        unPinnedNotes() {
            return this.notes.filter(note => {
                if (!note.isPinned) return note;
            })
        },
    },
    components: {
        textNote,
        imgNote,
        todoNote,
        videoNote
    }
}