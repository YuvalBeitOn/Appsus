import { emailService } from '../../email/service/email-service.js';
export default {
    props: ['mail'],
    template: `
        <section class="email-preview flex space-between">
            <section v-if="isSelected" class="email-buttons">
            <button @click="onRemoveMail()"><i class="fas fa-trash"></i>
            </button>
            </section>

            <input type="checkbox" v-model="isSelected"/>
            <label for="star-checkbox">{{starMarker}}</label>
            <input v-show="false" id="star-checkbox" type="checkbox" v-model="isStarred"/>
           <div class="email-sender">{{mail.sender}}</div>
           <div class="email-subject">{{mail.subject}}</div>
           <div class="email-body">{{mail.body}}</div>
           <div class="email-date">{{mail.sentAt}}</div>
        </section>
    `,
    data() {
        return {
            isSelected: false,
            isStarred: false
        }
    },
    methods: {
        onRemoveMail() {
            emailService.removeMail(this.mail.id)
        }
    },
    computed: {
        starMarker() {
           return (this.isStarred) ? 'STARREDDDDDDD' : 'NOT'
        }
    }
}