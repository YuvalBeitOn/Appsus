import textNote from './text-note.cmp.js'
import imgNote from './imgNote.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="note-list">
        <ul  v-if="pinnedNotes.length" class="pinned-notes">
            <component v-for="note in pinnedNotes" :key="note.id" :is="note.type" :note="note"></component>
        </ul>
        <ul v-if="unPinnedNotes.length" class="unPinned-notes">
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
        imgNote
    }
}