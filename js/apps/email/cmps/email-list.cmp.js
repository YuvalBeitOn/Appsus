import emailPreview from './email-preview.cmp.js'
export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section>
        <h1>I am your email List component</h1>
        <ul>
        <li v-for="currMail in mails" :key="currMail.id" >
           <email-preview :mail="currMail" @click.native="mailClicked(currMail.id)" />
        </li>
    </ul>
    </section>`,
    data() {
        return {
        }
    },
    components:{
        emailPreview,
    },

}
