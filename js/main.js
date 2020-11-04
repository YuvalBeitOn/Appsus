import { myRouter } from './routes.js'
import appHeader from "./cmps/app-header.js";
import appFooter from "./cmps/app-footer.js";
import userMsg from "./cmps/user-msg.js"

const options = {
    el: "#app",
    // router: myRouter,
    template: `
    <section class="flex column">
    <app-header />
    <main class="main-content grow">
    <user-msg></user-msg>
      <!-- <router-view ></router-view> -->
    </main>
    <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter,
        userMsg
    }
};

const app = new Vue(options);