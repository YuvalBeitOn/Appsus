import { emailService } from "../../email/service/email-service.js";
import emailList from "../../email/cmps/email-list.cmp.js";
import filterEmail from "../cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav.cmp.js"
import emailCompose from "../cmps/email-compose.cmp.js"

export default {
  name: "email-app",
  template: `
        <section class="email-app mt-5">
        <filter-email @filtered="setFilter"></filter-email>
        <div class="flex">
        <email-nav @open-compose='isComposeOpen = true'></email-nav>
        <router-view @mailRemove="loadMailsAfterRemove" :mails="emailsToshow"></router-view>
        <!-- <email-list @mailRemove="loadMailsAfterRemove" :mails="emailsToshow"></email-list> -->
        <email-compose v-if="isComposeOpen" @close-compose="isComposeOpen = false"></email-compose>
        </div>  
      </section>
    `,
  data() {
    return {
      mails: null,
      filterBy: null,
      mailsCategory: this.$route.params.mailsCategory,
      isComposeOpen: false
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    filterByName(name) {
      if (!name) return;
      return this.mails.filter(
        (mail) =>
          mail.body.toLowerCase().includes(name.toLowerCase()) ||
          mail.sender.toLowerCase().includes(name.toLowerCase()) ||
          mail.subject.toLowerCase().includes(name.toLowerCase())
      );
    },
    loadMailsAfterRemove() {
      console.log('im here !');
      const mails = this.mails;
      const mailsAfterRemove = mails.filter(mail => !mail.isRemoved)
      this.mails = mailsAfterRemove;
    },
  },
  computed: {
    emailsToshow() {
      if (!this.filterBy) return this.mails;
      const { byName, byStatus } = this.filterBy;
      if (byStatus === "all") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => mail);
      }
      if (byStatus === "read") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => mail.isRead);
      }
      if (byStatus === "unread") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => !mail.isRead);
      }
    },
  },
  created() {
    emailService.getMails(this.mailsCategory).then((mails) => {
      this.mails = mails;
    })
  }, watch: {
    '$route.params.mailsCategory'() {
      if (this.$route.query.subject) {
        return
      } else {
        this.mailsCategory = this.$route.params.mailsCategory
        emailService.getMails(this.mailsCategory).then((mails) => {
          this.mails = mails;
        })
      }
    },
    '$route.query.subject'() {
      console.log(this.$route.query.subject,this.$route.query.body)
      this.isComposeOpen = true;
    }
  },
  components: {
    emailService,
    emailList,
    filterEmail,
    emailNav,
    emailCompose,
  },
};
