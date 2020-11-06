import {eventBus} from '../../../services/event-bus-service.js'


export default {
    name:'nav-bar-email',
    template:`
    <section class="nav-bar-email">
    <div class="container-controls-nav flex column wrap">
    <div @click="openCompose" class="compose-container mb-5 flex column  align-center"><span class="title-compose">Compos</span><img class="compos-icon ml-5" src="../../../../assets/imgs/compose.png"></div>
            <router-link class="link-nav" to="/email/inbox" exact><i class="nav-icon-header fas fa-inbox"></i><span class="ml-5">Inbox</span></router-link>
            <router-link class="link-nav" to="/email/all" exact><i class="nav-icon-header fas fa-envelope"></i><span class="ml-5">All Mails</span></router-link>
            <router-link class="link-nav" to="/email/starred" exact><i class="nav-icon-header fas fa-star"></i> <span class="ml-5">Starred</span></router-link>
            <router-link class="link-nav" to="/email/sent" exact><i class="nav-icon-header fas fa-share"></i> <span class="ml-5">Sent</span></router-link>
            <router-link class="link-nav" to="/email/trash" exact><i class="nav-icon-header fas fa-trash"></i> <span class="ml-5">Deleted</span></router-link>
            <router-link class="link-nav" to="/email/drafts" exact><i class="nav-icon-header fas fa-file"></i> <span class="ml-5">Drafts</span></router-link>
    </div>
    </section>
    `,
    methods:{
        openCompose(){
            eventBus.$emit('compose-Msg',true)
        }
    }
}