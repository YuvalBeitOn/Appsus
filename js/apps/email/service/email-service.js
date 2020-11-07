import { utilService } from "../../../services/util.service.js";
var gMails = _createMails();
export const emailService = {
  getMails,
  removeMail,
  getMailById,
  sendMail,
  toggleMailStar,
  createMail,
};

function getMails(mailsCategory) {
  switch (mailsCategory) {
    case "all":
      return Promise.resolve(gMails.filter((mail) => !mail.isDraft));
    case "drafts":
      return Promise.resolve(gMails.filter((mail) => mail.isDraft));
    case "starred":
      return Promise.resolve(gMails.filter((mail) => mail.isStarred));
    case "sent":
      return Promise.resolve(gMails.filter((mail) => mail.isSent));
    case "trash":
      return Promise.resolve(gMails.filter((mail) => mail.isRemoved));
    case "inbox":
      return Promise.resolve(
        gMails.filter((mail) => !mail.isRemoved && !mail.isDraft)
      );
  }
}

function sendMail(mail, isDraft) {
  if (isDraft) mail.isDraft = true;
  else {
    mail.isDraft = false;
    mail.isSent = true;
  }
  gMails.unshift(mail);
  return Promise.resolve();
}

function toggleMailStar(mailId) {
  return Promise.resolve(
    getMailById(mailId).then((mail) => (mail.isStarred = !mail.isStarred))
  );
}

function getMailById(id) {
  const mail = gMails.find((mail) => mail.id === id);
  return Promise.resolve(mail);
}
function removeMail(id) {
  const idx = gMails.findIndex((mail) => mail.id === id);
  const mail = gMails[idx];
  if (mail.isRemoved) gMails.splice(idx, 1);
  else gMails[idx].isRemoved = true;
  return Promise.resolve();
}

///// Local Func: /////

function _createMails() {
  gMails = [];
  gMails.push(
    createMail(
      "Orel Vaizman",
      "oraelv@gmail.com",
      "AppSus Meeting",
      `Dear team-members,
      I would like to set a meet-up at 5 o'clock. We have four hours to go and this time we gonna take the briefcase!`
    )
  );
  gMails.push(
    createMail(
      "Muki Ben David",
      "MukiBenDavid@puki.co.il",
      "The mention of my name",
      `Dear AppSus members, please tell Yaron Biton stop using my name at every variable he makes. That's not funny anymore.`
    )
  );
  gMails.push(
    createMail(
      "Satoshi Nakmoto",
      "satoshin@gmx.com",
      "No worries, Bitcoin's crypto is strong",
      `SHA-256 is very strong.  It's not like the incremental step from MD5 to SHA1.  It can last several decades unless there's some massive breakthrough attack.`
    )
  );
  gMails.push(
    createMail(
      "Bob Habani",
      "bobTheMen@gmail.com",
      "I Have Work for you",
      utilService.makeLorem(5)
    )
  );
  gMails.push(
    createMail(
      "Yoel Shani",
      "yoel-antz@gmail.com",
      "You must to be content with me ",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Bob Dylan",
      "bob-dylan@gmail.com",
      "I hear about the new movie? ",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Tomer aviv",
      "lamalo@gmail.com",
      "I going to us tomorrow ",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Niv Shamsi",
      "niv-shamsi@gmail.com",
      "I am in israel",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Barel Zrian",
      "Barel-zrian@gmail.com",
      "Blitz digital come to us",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Adir Surya",
      "beni-antz@gmail.com",
      "I am going to study",
      utilService.makeLorem(10)
    )
  );
  gMails.push(
    createMail(
      "Maria",
      "beni-antz@gmail.com",
      "Jorge? I need to speak with you",
      utilService.makeLorem(10)
    )
  );
  return gMails;
}

function createMail(sender, senderMail, subject, body) {
  return {
    id: utilService.makeId(),
    sender,
    senderMail,
    subject,
    body,
    isRead: false,
    isSent: false,
    isStarred: false,
    isDraft: false,
    isRemoved: false,
    sentAt: Date.now(),
  };
}
