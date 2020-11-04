import { utilService } from '../../../services/util.service.js'
var gMails = _createMails()
var sentMsgs = []
export const emailService = {
    getMails,
    removeMail,
    getMailById,
    saveMailToSentInbox,
    toggleMailStar
};  

function getMails(){
    return Promise.resolve(gMails)
}

function saveMailToSentInbox(mail){
    mail.id = utilService.makeId()
    sentMsgs.unshift(mail)
    return Promise.resolve()
}

function toggleMailStar(mailid){
    getMailById(mailid)
    .then(mail => mail.isStar =(!mail.isStar))
}

function getMailById(id){
    const mail = gMails.find(mail=> mail.id === id)
    return Promise.resolve(mail)
}
function removeMail(id){
    const idx = gMails.findIndex(mail=> mail.id === id)
    gMails.splice(idx,1)
    return Promise.resolve()
}


///// Local Func: /////

function _createMails(){
    gMails = []
    gMails.push(createMail('Guy','guy235@gmail.com','Sprint 3 is On!',utilService.makeLorem(15)))
    gMails.push(createMail('Yaron biton','yaron-Biton@gmail.com','Yaron Biton Show',utilService.makeLorem(15)))
    gMails.push(createMail('Manham','manham-cohen@gmail.com','New day',utilService.makeLorem(20)))
    gMails.push(createMail('Bob Habani','bobTheMen@gmail.com','I Have Work for you',utilService.makeLorem(5),true))
    gMails.push(createMail('Gantz','beni-antz@gmail.com','Wassap? ',utilService.makeLorem(10)))
    return gMails;
}

function createMail(sender,senderMail,subject,body,isRead=false){
return {
    id:utilService.makeId(),
    sender,
    senderMail,
    subject,
    body,
    isRead,
    isSent:false,
    isStar:false,
    isDraft:false,
    sentAt:Date.now()
}
}
