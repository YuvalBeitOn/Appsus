
// import { myRouter } from './routes.js'
import appHeader from "./cmps/app-header.cmp.js"
import appFooter from './cmps/app-footer.cmp.js';
import userMsg from "./cmps/user-msg.cmp.js"


const options = {
  el: "#app",
//   router:myRouter,
  template: `
    <section class="flex column">
    <app-header />
    <user-msg></user-msg>
      <!-- <router-view ></router-view> -->
    <app-footer />
    </section>
    `,
    components:{
      appHeader,
      appFooter,
      userMsg
    }
};

const app = new Vue(options);