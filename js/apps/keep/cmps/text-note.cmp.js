import longText from '../../../cmps/long-text.cmp.js'

export default {
    name: 'text-note',
    props: ['note', 'editNote'],
    template: `

  <li v-if="editNote" class="note text-note">
  <div class="note-container">
      <h3 @blur="editNote" :id="note.id" contenteditable><long-text :txt="note.info.txt"></long-text></h3>
      <slot></slot>
      <span class="fas fa-font note-type"></span>
    </div>
    </li>
    `,
    components: {
        longText
    }
}