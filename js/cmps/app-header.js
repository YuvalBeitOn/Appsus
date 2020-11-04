export default {
    name: 'header',
    template: `
    <nav class="app-header">
        <div class="logo-container">
             <h1 class="logo">APPSUS</h1>
        </div>
        <div class="main-nav flex">
            <router-link to="/">Home</router-link>
            <router-link to="/books">Books</router-link>
            <router-link to="/email">Email</router-link>
            <router-link to="/notes">Notes</router-link>
        </div>
    </nav>
      `
}