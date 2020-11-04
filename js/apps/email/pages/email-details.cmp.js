import {emailService} from '../service/email-service.js'
export default {
  name: "datilss",
  props: ["mail"],
  template: `
    <section v-if="mail" class="mail-details flex column wrap">
    <div class="flex row">
    <i class="fas fa-envelope mr-5"></i>
    <i class="fas fa-trash-alt mr-5"></i>
    </div>
    <div class="massage mt-5">
    <h3>{{mail.subject}}</h3>
    <h4><strong>{{mail.sender}}</strong>mail</h4>
    <p class="mail-body">{{mail.body}}</p>
    </div>
    </section>
    `,
  data() {
    return {
      mail: null,
    };
  },
  methods: {
    loadMail() {
      const id = this.$route.params.mailId;
      emailService.getMailById(id).then(mail => (this.mail = mail));
    },
  },
  created() {
    this.loadMail();
  },
};
