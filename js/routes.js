 import homePage from './pages/home-page.cmp.js'
//  import notes from './'
 const myRoutes = [{
         path: '/',
         component: homePage
     },
    //  {
    //      path: '/notes',
    //      component: noteApp
    //  },
    //  {
    //      path: '/books',
    //      component: bookApp
    //  },
    //  {
    //      path: '/email',
    //      component: emailApp
    //  }
 ]


 export const myRouter = new VueRouter({ routes: myRoutes })