import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
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
{
    path: '/email/compose',
    component: emailCompose
},
// /////////////////////////////////////////////
{
    path: '/keep',
    component: keepApp
},


]


export const myRouter = new VueRouter({ routes: myRoutes })