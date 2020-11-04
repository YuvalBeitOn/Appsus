
export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
           <h4>{{mail.sender}}</h4>
           <h4>{{mail.subject}}</h4>
           <h4>{{mail.body}}</h4>
           <h4>{{mail.sentAt}}</h4>
        </section>
    `,
    created(){
    }
}