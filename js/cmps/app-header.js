export default {
    name: 'header',
    template: `
    <header class="app-header">
        <div class="logo-container">
             <h1 class="logo">APPSUS</h1>
        </div>
        <nav class="main-nav flex">
            <router-link to="/">Home</router-link>
            <router-link to="/books">Books</router-link>
            <router-link to="/email">Email</router-link>
            <router-link to="/notes">Notes</router-link>
        </nav>
    </header>
      `
}