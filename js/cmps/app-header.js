export default {
    name: 'app-header',
    template: `
    <header class="app-header flex space-between align-center">
        <div class="logo-container">
             <h1 class="logo">Appsus</h1>
        </div>
        <nav class="main-nav flex space-between">
            <router-link to="/" exact><i class="nav-icon-header fas fa-home"></i></router-link>
            <!-- TODO: REMOVE THIS LINE BELOW FROM NOTE! :-->
            <!-- <router-link to="/email/inbox" exact><i class="nav-icon-header fas fa-envelope"></i><span class="ml-5">Email</span></router-link> -->
           <!-- ////////////////////////////////////////////////////////// -->
            <!-- TODO: MOVE THIS LINKS TO MAIL APP! -->
            <router-link to="/email/inbox" ><i class="nav-icon-header fas fa-inbox"></i><span class="ml-5">Inbox</span></router-link>
            <router-link to="/email/all" ><i class="nav-icon-header fas fa-envelope"></i><span class="ml-5">All Mails</span></router-link>
            <router-link to="/email/stared" exact><i class="nav-icon-header fas fa-star"></i> <span class="ml-5">Starred</span></router-link>
            <router-link to="/email/sent" exact><i class="nav-icon-header fas fa-share"></i> <span class="ml-5">Sent</span></router-link>
            <router-link to="/email/remove" exact><i class="nav-icon-header fas fa-trash"></i> <span class="ml-5">Deleted</span></router-link>
            <router-link to="/email/drafts" exact><i class="nav-icon-header fas fa-file"></i> <span class="ml-5">Drafts</span></router-link>
            <router-link to="/email/compose" exact><i class="nav-icon-header fas fa-file"></i> <span class="ml-5">Compose</span></router-link>
            <!-- ///////////////////////////////////////////////// -->
            <router-link to="/keep" exact><i class="nav-icon-header fas fa-sticky-note"></i></router-link>
            <router-link to="/books" exact><i class="nav-icon-header fas fa-book"></i></router-link>
        </nav>
    </header>
      `
}