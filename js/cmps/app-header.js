export default {
    name: 'app-header',
    template: `
    <header class="app-header flex space-between  align-center">
        <div class="logo-container">
             <h1 class="logo">APPSUS</h1>
        </div>
        <nav class="main-nav flex space-between">
            <router-link to="/">Home</router-link>
            <router-link to="/email">Email</router-link>
            <router-link to="/keep">Keep</router-link>
            <router-link to="/books">Books</router-link>
        </nav>
    </header>
      `
}