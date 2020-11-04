import { emailService } from '../../email/service/email-service.js';
export default {
    props: ['mail'],
    template: `
        <router-link :to="'/email/inbox/'+mail.id">  
        <section class="email-preview flex space-between">
            <section v-if="isSelected" class="email-buttons">
            <button @click.prevent.stop="onRemoveMail()"><i class="fas fa-trash"></i>
            </button>
            </section>
            <input @click.stop type="checkbox" v-model="isSelected"/>
            <i @click.prevent.stop="onStarClicked" class="fas fa-star" :class="starClass"></i>
           <div class="email-sender">{{mail.sender}}</div>
           <div class="email-subject">{{mail.subject}}</div>
           <div class="email-body">{{mail.body}}</div>
           <div class="email-date">{{mail.sentAt}}</div>
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
            emailService.removeMail(this.mail.id);
        },
        onStarClicked() {
            emailService.toggleMailStar(this.mail.id);
        }
    },
    computed: {
        starClass(){
            return {starred: (this.mail.isStar)}
        }

    }
}