export default {
    props: ['note'],
    template: ` 
    <li class="note todo-note">
        <ul class="todo-list">
            <li @click="toggleIsDone(todo)" :class="{'todo':true, 'done': todo.isDone}" v-for="todo in note.info.todos" :key="todo.id">
                {{todo.txt}}
            </li>
        </ul>
    </li>
    
    `,
    methods: {
        toggleIsDone(todo) {
            todo.isDone = !todo.isDone;
        }

    },
    created() {
        console.log(this.note);


    }
}