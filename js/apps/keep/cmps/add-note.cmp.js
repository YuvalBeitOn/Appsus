export default {
    template: `
    <section class= "add-note flex justify-center">
        <form class="add-note-container"  @submit.prevent="addNote">
            <input v-model="currNote.info.txt" type="text" :placeholder="getPlaceHolder">
            <input v-if="showSecondInput" v-model="currNote.info.url" type="text" placeholder="Enter url...">
            <div class="add-note-btns">
                <button class="selected" @click.prevent="handleNoteType('textNote')"><i class="fas fa-font"></i></button>
                <button  @click.prevent="handleNoteType('imgNote')"><i class="far fa-image"></i></button> 
                <button  @click.prevent="handleNoteType('videoNote')"><i class="fab fa-youtube"></i></button>
                <button  @click.prevent="handleNoteType('todoNote')"><i class="fas fa-th-list"></i></button>
            </div>
            <button type="submit">Add note</button>
        </form>  
    </section>
    `,
    data() {
        return {
            currNote: {
                type: 'textNote',
                isPinned: false,
                info: { txt: '', url: '' }
            },
            placeHolders: {
                'textNote': `What's on your mind...`,
                'imgNote': `Enter img title...`,
                'todoNote': 'Enter comma separted list...',
                'videoNote': 'Enter video title...'
            }
        }
    },
    computed: {
        getPlaceHolder() {
            return this.placeHolders[this.currNote.type];
        },
        showSecondInput() {
            let type = this.currNote.type;
            console.log(type, 'type');
            if (type !== 'textNote' && type !== 'todoNote') return true;
            else return false;
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.currNote)
        },
        handleNoteType(type) {
            this.currNote.type = type;
        }
    }
}