export default {
    props: ['notes'],
    template: `
    <section class="note-list">
        <ul class="pinned-notes">{{pinnedNotes}}/ul>
            
        <ul class="unPinned-notes">{{unPinnedNotes}}</ul>
    </section>
    `,
    computed: {
        pinnedNotes() {
            return this.notes.map(note => note.isPinned)
        },
        unPinnedNotes() {
            return this.notes.map(note => !note.isPinned)
        }
    },
    components: {
        textNote,
        imgNote
    }
}