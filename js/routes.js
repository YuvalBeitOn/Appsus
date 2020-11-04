import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
//  import notes from './'
const myRoutes = [{
    path: '/',
    component: homePage
},
{
    path: '/email',
    component: emailApp
},
{
    path: '/keep',
    component: keepApp
},
    //  {
    //      path: '/books',
    //      component: bookApp
    //  },

]


export const myRouter = new VueRouter({ routes: myRoutes })