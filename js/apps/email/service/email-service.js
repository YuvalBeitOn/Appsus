import { utilService } from '../../../services/util.service'
var gMails = _createMails()
export const emailService = {
    getMails,
};  

function getMails(){
    return Promise.resolve(gMails)
}

function _createMails(){
    gMails = []
    gMails.push(_createMail('Guy','New day',utilService.makeLorem(15)))
    gMails.push(_createMail('Moshe','New day',utilService.makeLorem(15)))
    gMails.push(_createMail('Manham','New day',utilService.makeLorem(20)))
    gMails.push(_createMail('Bob Habani','I Have Work',utilService.makeLorem(5)))
    gMails.push(_createMail('Gantz','Wassap? ',utilService.makeLorem(10)))
    return gMails;
}

function _createMail(name,subject,body,isRead=false){
return {
    id:utilService.makeId(),
    name,
    subject,
    body,
    isRead,
    sentAt:Date.now()
}
}