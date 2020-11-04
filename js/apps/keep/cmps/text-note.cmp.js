export default {
    props: ['note'],
    template: `
    <li class="note text-note">
      <h3>{{note.info.txt}}</h3>
</li>
    `
}