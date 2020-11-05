export default {
    template: `
    <section class="home-page ">
    <div class="jumbotron flex column  wrap align-center">
        <h1 class="title-home-page">Home Sweet Home</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.

It uses utility classes for typography and spacing to space content out within the larger container.</p>

<div class="controls-btn">
            <router-link to="/email/inbox" exact><button class="btn-home">Email</button></router-link>
            <router-link to="/keep" exact><button class="btn-home">Keep</button>
</router-link>
            <router-link to="/books" exact><button class="btn-home">Books</button>
</router-link>

</div>
</div>    
</section>
    `,

}