export default {
    props: ["txt"],
    template: `
      <section>
        <p>{{textToShow}}</p>
      </section>
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
          return txt.substring(0, 65) + "...";
        } else return txt;
      },
     
    },
  };
  
  
  