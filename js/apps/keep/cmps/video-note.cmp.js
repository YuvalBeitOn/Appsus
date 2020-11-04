export default {
    props: ['note'],
    template: `
    <li class="note video-note">
        <iframe width="200" height="200" :src="note.info.url"></iframe>
        <div class="flex align-center justify-center"> {{note.info.txt}} </div>
    </li>
    `
}