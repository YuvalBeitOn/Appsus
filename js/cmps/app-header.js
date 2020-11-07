
export default {
    name: 'app-header',
    template: `
    <header class="app-header ">
    <div class="flex space-between align-center">
        <div class="logo-container flex">
        <img src="assets/imgs/logo.svg" class="logo-svg " alt="">
             <h1 class="logo ml-5">AppSus</h1>
        </div>
        <nav class="main-nav flex space-between">
            <router-link to="/" exact><i class="nav-icon-header fas fa-home"></i></router-link>
            <router-link to="/email/inbox" exact><i class="nav-icon-header word-red fas fa-envelope"></i></router-link>
            <router-link to="/keep" exact><i class="nav-icon-header word-yellow fas fa-sticky-note"></i></router-link>
            <router-link to="/book" exact><i class="nav-icon-header word-green fas fa-book"></i></router-link>
        </nav>
        </div>
    </header>
      `
}