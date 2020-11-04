export default {
    props: ['note'],
    template: `
    <li class="note img-note">
        <img :src="note.info.url" alt="img">
        <div class="flex align-center justify-center"> {{note.info.txt}} </div>
    </li>
    `
}