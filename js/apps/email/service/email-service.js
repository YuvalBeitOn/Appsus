import { utilService } from '../../../services/util.service.js'
var gMails = _createMails()
var sentMsgs = []
export const emailService = {
    getMails,
    removeMail,
    getMailById,
    saveMailToSentInbox,
};  

function getMails(){
    return Promise.resolve(gMails)
}


function saveMailToSentInbox(mail){
    mail.id = utilService.makeId()
    sentMsgs.unshift(mail)
    return Promise.resolve()
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
    gMails.push(createMail('Guy','Sprint 3 is On!',utilService.makeLorem(15)))
    gMails.push(createMail('Moshe','Yaron Biton Show',utilService.makeLorem(15)))
    gMails.push(createMail('Manham','New day',utilService.makeLorem(20)))
    gMails.push(createMail('Bob Habani','I Have Work for you',utilService.makeLorem(5)))
    gMails.push(createMail('Gantz','Wassap? ',utilService.makeLorem(10)))
    return gMails;
}

function createMail(name,subject,body,isRead=false){
return {
    id:utilService.makeId(),
    name,
    subject,
    body,
    isRead,
    sentAt:Date.now()
}
}