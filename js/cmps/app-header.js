export default {
    name: 'app-header',
    template: `
    <header class="app-header flex space-between align-center">
        <div class="logo-container">
             <h1 class="logo">Appsus</h1>
        </div>
        <nav class="main-nav flex space-between">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/email/inbox" exact>Email</router-link>
            <router-link to="/keep" exact>Keep</router-link>
            <router-link to="/books" exact>Books</router-link>
        </nav>
    </header>
      `
}