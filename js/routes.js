import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'

const myRoutes = [{
    path: '/',
    component: homePage
},
{
    path: '/email/inbox',
    component: emailApp
},
    {
        path: '/email/inbox/:mailId',
        component: emailDetails
    },
{
    path: '/keep',
    component: keepApp
},


]


export const myRouter = new VueRouter({ routes: myRoutes })