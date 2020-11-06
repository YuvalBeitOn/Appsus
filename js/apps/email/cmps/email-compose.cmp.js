import { emailService } from '../service/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js'
export default {
  name: "email-compose",
  template: `
            <section class="email-compose compose-form flex column wrap align-center">
               <form @submit="submitMessage">
                  <div class="header-compose">
                  <button class="btn-close" @click="closeCompose">X</button>
                  </div>
                  <input type="text" placeholder="To:" v-model.trim="composeMsg.to" required/>
                  <input type="text" placeholder="Subject"  v-model.trim="composeMsg.subject"/>
                  <textarea id="message" v-model="composeMsg.body" placeholder="Enter Your msg" name="compose-msg" rows="4" cols="50" >
                  </textarea>
                  <button class="send-compose">Send Massage</button>
               </form>
            </section>
      `,
  data() {
    return {
      composeMsg: {
        to: "",
        subject: "",
        body: "",
      },
      isSubmitted: false
    }
  },
  methods: {
    getEmptyCell() {
      this.composeMsg.to = ""
      this.composeMsg.subject = ""
      this.composeMsg.body = ""
    },
    closeCompose() {
      this.$emit('close-compose')
    },
    submitMessage() {
      this.isSubmitted = true;
      this.sendMsg()
    },
    sendMsg(isDraft = false) {
      const clonedMessage = JSON.parse(JSON.stringify(this.composeMsg))
      const newMail = emailService.createMail('Me', clonedMessage.to, clonedMessage.subject, clonedMessage.body)
      emailService.sendMail(newMail, isDraft).then(() => {
        eventBus.$emit("show-msg", { txt: 'Your message was sent successfuly!', type: 'alert-success' })
        this.getEmptyCell()
        this.$emit('close-compose')
      })
    },
  },
  destroyed() {
    console.log(this.isSubmitted)
    if (!this.isSubmitted) {
      return;
    } else {
      this.sendMsg(true)
    }
  }
};
