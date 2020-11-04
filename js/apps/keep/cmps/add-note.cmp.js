export default {
    template: `
    <section class= "add-note flex justify-center">
        <form class="add-note-container"  @submit.prevent="addNote">
            <input v-model="currNote.info.txt" type="text" placeholder="What's on your mind...">
            <div class="add-note-btns">
                <button @click.prevent="handleNoteType('text')"><i class="fas fa-font"></i></button>
                <button  @click.prevent="handleNoteType('img')"><i class="far fa-image"></i></button> 
                <button>X</button>
                <button>X</button>
                <button>X</button>
            </div>
        </form>  
    </section>
    `,
    data() {
        return {
            currNote: {
                type: '',
                isPinned: false,
                info: { txt: "Fullstack Me Baby!" }
            },
        }
    },
    methods: {
        addNote() {
            console.log('submit!');
            this.$emit('addNote', this.currNote)
        },
        handleNoteType(type) {
            this.currNote.type = type;
        }
    }
}