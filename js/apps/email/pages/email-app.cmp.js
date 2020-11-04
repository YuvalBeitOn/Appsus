import { emailService } from '../../email/service/email-service.js'
export default {
    template: `
        <section class="email-app">
        <h1>I am your Email APP</h1>

    </section>
    `,
    data() {
        return {
            mails: null
        }
    },
    created() {
        emailService.getEmails()
            .then(mails => this.mails = mails)
    },
    components: {
        emailService
    }
}