import emailPreview from './email-preview.cmp.js'
export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section class="email-list flex column">
        <ul>
        <li v-for="currMail in mails" :key="currMail.id" >
           <email-preview :mail="currMail" />
        </li>
    </ul>
    </section>`,
    data() {
        return {
        }
    },
    methods: {
        // mailClicked(mailId) {
        //     console.log(mailId)
        // }
    },
    components: {
        emailPreview,
    },

}
