import { emailService } from '../../email/service/email-service.js'
import emailList from '../../email/cmps/email-list.cmp.js'
import filterEmail from '../cmps/email-filter.cmp.js'
export default {
    template: `
        <section class="email-app">
        <h1>I am your Email APP </h1>
        <filter-email></filter-email>
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
        emailList,
        filterEmail
    }
}