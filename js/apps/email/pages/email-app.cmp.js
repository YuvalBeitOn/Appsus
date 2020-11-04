import { emailService } from "../../email/service/email-service.js";
import emailList from "../../email/cmps/email-list.cmp.js";
import filterEmail from "../cmps/email-filter.cmp.js";
export default {
  name: "email-app",
  template: `
        <section class="email-app">
        <h1>I am your Email APP </h1>
        <filter-email @filtered="setFilter"></filter-email>
        <email-list :mails="emailsToshow"></email-list>
        </section>
    `,
  data() {
    return {
      mails: null,
      filterBy: null,
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
        else return this.mails.filter((mail) => mail.isRead === true);
      }
      if (byStatus === "unread") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => mail.isRead === false);
      }
    },
  },
  created() {
    emailService.getMails().then((mails) => {
      this.mails = mails;
      console.log(mails);
    });
  },
  components: {
    emailService,
    emailList,
    filterEmail,
  },
};
