import { emailService } from '../../email/service/email-service.js'
import bookList from '../../email/cmps/book-list.cmp.js'
export default {
    template: `
        <section class="email-app">
        <h1>I am your Email APP </h1>
        <book-list :mails="mails"></book-list>
        </section>
    `,
    data() {
        return {
            mails: null
        }
    },
    created() {
        emailService.getMails()
            .then(mails => {
                this.mails = mails
                console.log(mails)
            })
    },
    components: {
        emailService,
        bookList
    }
}