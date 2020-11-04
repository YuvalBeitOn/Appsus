import {emailService} from '../service/email-service.js'
export default {
  name: "details",
  template: `
    <section v-if="mail" class="mail-details flex column wrap align-center ">
    <div class="flex row mt-5">
    <i @click="$router.go(-1)" class="fas fa-arrow-left mr-5"></i>
    <i @click="$router.go(-1)" class="fas fa-envelope mr-5"></i>
    <i @click="removeMail(mail.id)" class="fas fa-trash-alt mr-5"></i>
    </div>
    <div class="massage mt-5">
    <h3>{{mail.subject}}</h3>
    <h4><strong class="mr-5">{{mail.sender}}</strong><span class="mail-address">{{mailAdress}}</span></h4>
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
    removeMail(id){
        emailService.removeMail(id).then(()=>this.$router.go(-1))
    }
  },
  computed:{
    mailAdress(){
        const mail = this.mail.senderMail.toLowerCase()
        return  `<${mail}>`
    }
  },
  created() {
    this.loadMail();
  },
};
