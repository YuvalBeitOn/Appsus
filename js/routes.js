import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
// TODO: MOVE THIS LINKS TO APP MAIL!!!! ?
import emailAll from './apps/email/pages/email-all.cmp.js'
import emailStar from './apps/email/pages/email-star.cmp.js'
import emailSent from './apps/email/pages/email-sent.cmp.js'
import emailRemove from './apps/email/pages/email-remove.cmp.js'
import emailDrafts from './apps/email/pages/email-drafts.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
const myRoutes = [{
    path: '/',
    component: homePage
},
{
    path: '/email/:mailsCategory',
    component: emailApp
},
{
    path: '/email/inbox/:mailId',
    component: emailDetails
},
//TODO: MOVE THIS PATHS TO MAIL APP ROUTS 
// {
//     path: '/email/all',
//     component: emailAll
// },
// {
//     path: '/email/stared',
//     component: emailStar
// },
// {
//     path: '/email/stared',
//     component: emailStar
// },
// {
//     path: '/email/sent',
//     component: emailSent
// },
// {
//     path: '/email/drafts',
//     component: emailDrafts
// },
// {
//     path: '/email/remove',
//     component: emailRemove
// }, {
//     path: '/email/compose',
//     component: emailCompose
// },
// /////////////////////////////////////////////
{
    path: '/keep',
    component: keepApp
},


]


export const myRouter = new VueRouter({ routes: myRoutes })