
import { myRouter } from './routes.js'
import appHeader from "./cmp/book-header.cmp.js";
import appFooter from "./cmp/book-footer.cmp.js";
import userMsg from "./cmp/user-msg.cmp.js"



const options = {
  el: "#app",
  router:myRouter,
  template: `
    <section class="flex column">
    <app-header />
    <main class="main-content grow">
    <user-msg></user-msg>
      <router-view ></router-view>
    </main>
    <app-footer />
    </section>
    `,
    components:{
      bookHeader,
      bookFooter,
      userMsg
    }
};

const app = new Vue(options);