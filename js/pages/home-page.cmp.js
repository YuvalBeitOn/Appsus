export default {
    template: `
    <section class="home-page ">
    <div class="jumbotron ">
        <div class="container flex column  wrap align-center">
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
</div>   
<!--Section Our features -->
<section class="our-features">
<div class="container features-container">
<h2 class="why-us-title">Our Features</h2>
<div class="why-us-container flex  align-center justify-center">
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-red fas fa-envelope"></i>
<h3 class="title-box">Mail-Box</h3>
<p class="text-box">Send Mail is much more easier! now you can send mail fast you can drem!</p>
<router-link to="/email/inbox" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-yellow fas fa-sticky-note"></i>
<h3 class="title-box ">Keep</h3>
<p class="text-box">Quickly capture what's on your mind and share those thoughts with friends and family. Save your note and your ideas in one powerful app! </p>
<router-link to="/keep" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-green fas fa-book"></i>
<h3 class="title-box">Books</h3>
<p class="text-box">Save your favorite books! now you can save all the books that you love and looking for new books!</p>
<router-link to="/book" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
</div> 
</div>
</section>
<!-- Section info app -->
<section class="info-app">
<div class="box-info keep-info">
<div class="info-container container flex wrap">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Save your thoughts, wherever you are</h2>
    <p class="text-box text-info">
Quickly filter and search for notes by color and other attributes like lists with images, audio notes with reminders or just see shared notes. Find what you're looking for even faster, and let Keep do the remembering for you.
</p>
<router-link to="/keep" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<img src="./assets/imgs/mocupkeep.jpg" class="image-info"  alt="">
</div>
</div>

<div class="box-info mail-info">
<div class="info-container container flex wrap">
<img src="./assets/imgs/mocupkeep.jpg" class="image-info"  alt="">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Send your mail, wherever you are</h2>
    <p class="text-box text-info">
Quickly filter and search for notes by color and other attributes like lists with images, audio notes with reminders or just see shared notes. Find what you're looking for even faster, and let Keep do the remembering for you.
</p>
<router-link to="/email/inbox" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
</div>
</div>

<div class="box-info book-info">
<div class="info-container container flex wrap">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Save your Books, wherever you are</h2>
    <p class="text-box text-info">
Quickly filter and search for notes by color and other attributes like lists with images, audio notes with reminders or just see shared notes. Find what you're looking for even faster, and let Keep do the remembering for you.
</p>
<router-link to="/book" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<img src="./assets/imgs/mocupkeep.jpg" class="image-info"  alt="">

</div>
</div>
</section>
<h2 class="flex justify-center">Our Team</h2>
<section class="our-team container flex row justify-center align-center">
    <div class="box-team flex column justify-center align-center wrap">
<img src="./assets/imgs/team/team-guy.png" class="image-team"  alt="">
    <h2 class="title-box title-team">Name Name</h2>
    <p class="text-box text-team">Lorem Ipsum Dolar Smit</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://www.facebook.com/Guy.Indepurker"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/"><i class="item-social fab fa-linkedin-in"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/guyindepurker"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
    <div class="box-team flex column justify-center align-center wrap">
<!-- <img src="./assets/imgs/team/team-guy.png" class="image-team"  alt=""> -->
    <h2 class="title-box title-team">Name Name</h2>
    <p class="text-box text-team">Lorem Ipsum Dolar Smit</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://www.facebook.com/Guy.Indepurker"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/"><i class="item-social fab fa-linkedin-in"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/guyindepurker"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
    <div class="box-team flex column justify-center align-center wrap">
<!-- <img src="./assets/imgs/team/team-guy.png" class="image-team"  alt=""> -->
    <h2 class="title-box title-team">Name</h2>
    <p class="text-box text-team">Lorem Ipsum Dolar Smit</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://www.facebook.com/Guy.Indepurker"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/"><i class="item-social fab fa-linkedin-in"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/guyindepurker"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
</section>

</section>
    `,
};