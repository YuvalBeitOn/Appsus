export default {
  name: "filter-mails",
  template: `
    <section class="email-filter">
    <form @submit.prevent="emitFilter" class="email-controls container flex justify-center wrap">
    <input type="text" id="search" v-model="filterBy.byName" @input="emitFilter" placeholder="Search mail">
    <select v-model="filterBy.byStatus" @change="emitFilter">
   <option value="all">All</option>
   <option value="read">Read</option>
  <option value="unread">Unread</option>
</select>
</form>
{{filterBy}}
    </section>
    `,
  data() {
    return {
      filterBy: {
        byName: "",
        byStatus:"all",
      },
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
