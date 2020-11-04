export default {
    props: ["txt"],
    template: `
      <template>
        <p>{{textToShow}}</p>
      </template>
      `,
    data() {
      return {
        isShowAll: false,
      };
    },
    computed: {
      textToShow() {
        const txt = this.txt;
        if (txt.length > 100 && !this.isShowAll) {
          return txt.substring(0, 100) + "...";
        } else return txt;
      },
     
    },
  };
  
  
  