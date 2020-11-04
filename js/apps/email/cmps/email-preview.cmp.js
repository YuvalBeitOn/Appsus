import { emailService } from '../../email/service/email-service.js';
import longText from '../../../cmps/long-text.cmp.js';
import {eventBus} from '../../../services/event-bus-service.js'
export default {
    props: ['mail'],
    template: `
        <router-link :to="'/email/inbox/'+mail.id">  
        <section class="email-preview flex" :class="sectionState">
            <section v-if="isSelected" class="email-buttons">
            <button @click.prevent.stop="onRemoveMail()"><i class="fas fa-trash"></i>
            </button>
            </section>
            <input @click.stop type="checkbox" v-model="isSelected"/>
            <i @click.prevent.stop="onStarClicked" class="fas fa-star mr-5 ml-5 " :class="starClass"></i>
           <div class="email-sender" :class="readState">{{mail.sender}}</div>
           <div class="email-subject" :class="readState">{{mail.subject}} - </div>
           <div class="email-body"><long-text :txt="mail.body"></long-text></div>
           <div class="email-date align-self-end" :class="readState">{{mail.sentAt}}</div>
        </section>
        </router-link>
    `,
    data() {
        return {
            isSelected: false,
            isStarred: false
        }
    },
    methods: {
        onRemoveMail() {
            emailService.removeMail(this.mail.id).then(()=>eventBus.$emit("show-msg", {txt: 'Your Message moved to trash!', type:'alert-success'}));
        },
        onStarClicked() {
            emailService.toggleMailStar(this.mail.id);
        },
    },
    computed: {
        starClass() {
            return { starred: (this.mail.isStar) }
        },
        readState() {
            return { unreadedmail: (!this.mail.isRead) }
        },
        sectionState(){
            return {'section-readed': (this.mail.isRead),'section-marked':this.isSelected}
        }

    },
    components:{
        longText,
    }
}
