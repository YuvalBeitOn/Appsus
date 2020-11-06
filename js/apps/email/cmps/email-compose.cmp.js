import { emailService } from '../service/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js'
export default {
  name: "email-compose",
  template: `
             <section class="email-compose compose-form flex column wrap align-center">
                  <div class="header-compose">
                  <button class="btn-close" @click="closeCompose">X</button>
                  </div>
                  <input type="text"  placeholder="To:" v-model.trim="composeMsg.to" required>
                  <input type="text" placeholder="Subject"  v-model.trim="composeMsg.subject" >
                  <textarea id="message" v-model="composeMsg.body" placeholder="Enter Your msg" name="compose-msg" rows="4" cols="50" >
                 </textarea>
                 <button @click="sendMsg" class="send-compose">Send Massage</button>
                  </section>
      `,
  data() {
    return {
      composeMsg: {
        to: "",
        subject: "",
        body: "",
      },
      // isSendMsg: false,
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
    sendMsg() {
      const depCopyMsg = JSON.parse(JSON.stringify(this.composeMsg))
      const newMail = emailService.createMail('Me', depCopyMsg.to, depCopyMsg.subject, depCopyMsg.body)
      emailService.sendMail(newMail).then(() => {
        eventBus.$emit("show-msg", { txt: 'Your Message has sent!', type: 'alert-success' })
        this.getEmptyCell()

        this.$emit('close-compose')
      })
    },
  },
  // created() {
  //   eventBus.$on('compose-Msg', isSend => this.isSendMsg = isSend)
  // }
};
