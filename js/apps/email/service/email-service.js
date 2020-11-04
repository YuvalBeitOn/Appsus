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
    return Promise.resolve(
    getMailById(mailid)
    .then(mail => mail.isStar =(!mail.isStar)))
    
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
    gMails.push(createMail('Yoel Shani','yoel-antz@gmail.com','You must to be content with me ',utilService.makeLorem(10)))
    gMails.push(createMail('Bob Dylan','bob-dylan@gmail.com','I hear about the new movie? ',utilService.makeLorem(10)))
    gMails.push(createMail('Tomer aviv','lamalo@gmail.com','I going to us tomorrow ',utilService.makeLorem(10)))
    gMails.push(createMail('Niv Shamsi','niv-shamsi@gmail.com','I am in israel',utilService.makeLorem(10)))
    gMails.push(createMail('Barel Zrian','Barel-zrian@gmail.com','Blitz digital come to us',utilService.makeLorem(10)))
    gMails.push(createMail('Adir Surya','beni-antz@gmail.com','I am going to study',utilService.makeLorem(10)))
    gMails.push(createMail('Maria','beni-antz@gmail.com','Jorge? I need to speak with you',utilService.makeLorem(10)))
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
