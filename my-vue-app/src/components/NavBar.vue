<template>
  <nav id="menu">




    <div class="menu-item">
      <div class="menu-text">
        <a href="/">Produit</a>
      </div>
      <div class="sub-menu">

        <div class="icon-box">
          <div class="icon"><i class="fal fa-home"></i></div>
          <div class="text">
            <div class="title"><a href="/">MyHome</a> <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Bienvenue sur la page d'accueil.</div>
          </div>
        </div>

        <div class="icon-box">
          <div class="icon"><i class="fal fa-store"></i></div>
          <div class="text">
            <div class="title"><a href="/shop">Shop</a> <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Explorez l'ensemble du catalogue.</div>
          </div>
        </div>

        <div class="sub-menu-holder"></div>
      </div>
    </div>



    <div class="menu-item highlight">
      <div class="menu-text">
        <a href="/shop">Magasin</a>
      </div>
      <div class="sub-menu double">
        <div class="icon-box gb a">
          <div class="icon"><i class="far fa-shopping-cart"></i></div>
          <div class="text">
            <div class="title">Explore <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Shopping Options</div>
          </div>
        </div>
        <div class="icon-box gb b">
          <div class="icon"><i class="far fa-tags"></i></div>
          <div class="text">
            <div class="title">Discover <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Special Deals</div>
          </div>
        </div>
        <div class="icon-box gb c">
          <div class="icon"><i class="far fa-credit-card"></i></div>
          <div class="text">
            <div class="title">Shop <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Securely Online</div>
          </div>
        </div>
        <div class="icon-box gb d">
          <div class="icon"><i class="far fa-gift"></i></div>
          <div class="text">
            <div class="title">Gift Ideas <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">For Every Occasion</div>
          </div>
        </div>
        <div class="icon-box gb e">
          <div class="icon"><i class="far fa-star"></i></div>
          <div class="text" onclick="#">
            <div class="title">Featured Products <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Top Picks Just For You</div>
          </div>
        </div>
        <div class="icon-box gb f">
          <div class="icon"><i class="far fa-shopping-bag"></i></div>
          <div class="text">
            <div class="title">Shopping Guide <i class="far fa-arrow-right"></i></div>
            <div class="sub-text">Tips and Tricks</div>
          </div>
        </div>
        <div class="bottom-container">
          Ready to start shopping? <a href="/shop">Browse Now</a>
        </div>
        <div class="sub-menu-holder"></div>
      </div>
    </div>






    <div class="menu-item highlight">
      <div class="menu-text">
        <a href="/about">Support</a>
      </div>
      <div class="sub-menu triple">
        <div class="top-container gb c icon-box">
          <div class="icon big"><i class="far fa-life-ring"></i></div>
          <div class="text">
            <div class="title"><a href="/about">About Us</a></div>
            <div class="sub-text">Learn more about our support services</div>
          </div>
        </div>
        <div class="box">
          <h3>Your Support Journey</h3>
          <a href="#">Get Started</a>
          <a href="#">Learn the Basics</a>
          <a href="#">Get Advanced Support</a>
          <a href="#">Start Teaching Support</a>
        </div>
        <div class="box">
          <h3>Your Support Tools</h3>
          <a href="#">Support Hub</a>
          <a href="#">Knowledge Base</a>
          <a href="#">Issue Tracker</a>
          <a href="#">Community Forum</a>
        </div>
        <div class="icon-box flat">
          <div class="icon"><i class="fal fa-plug"></i></div>
          <div class="text">
            <div class="title">API Guide <i class="far fa-arrow-right"></i></div>
          </div>
        </div>
        <div class="icon-box flat">
          <div class="icon"><i class="fal fa-comments"></i></div>
          <div class="text">
            <div class="title">Support Line <i class="far fa-arrow-right"></i></div>
          </div>
        </div>
        <div class="icon-box flat">
          <div class="icon"><i class="fal fa-phone-volume"></i></div>
          <div class="text">
            <div class="title">Live Chat Support <i class="far fa-arrow-right"></i></div>
          </div>
        </div>
        <div class="icon-box flat">
          <div class="icon"><i class="fal fa-book-spells"></i></div>
          <div class="text">
            <div class="title">Support Documentation <i class="far fa-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </div>




    <div class="menu-item">
      <div class="menu-text">
        <a href="/register">Connexion</a>
      </div>

      <div class="sub-menu">
        <div class="icon-box">
          <div class="icon"><i class="fas fa-user"></i></div>
          <div class="text">
            <div class="title"><a href="/login">Login</a> <i class="fas fa-sign-in-alt"></i></div>
            <div class="sub-text">Connectez-vous à votre compte.</div>
          </div>
        </div>

        <div class="icon-box">
          <div class="icon"><i class="fas fa-user-plus"></i></div>
          <div class="text">
            <div class="title"><a href="/register">Register</a> <i class="fas fa-arrow-right"></i></div>
            <div class="sub-text">Créez votre compte.</div>
          </div>
        </div>
        <div class="sub-menu-holder"></div>
      </div>
    </div>



    <div id="sub-menu-container">
      <div id="sub-menu-holder">
        <div id="sub-menu-bottom">

        </div>
      </div>
    </div>


  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    // Ajoutez le script Font Awesome au moment du montage du composant
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/628c8d2499.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  },
};
</script>


<style>
header {
  background: linear-gradient(45deg, #6ba991, #1a2924);
  top: 0;
  z-index: 1000;
  width: 100%;
  /* Largeur de la barre de navigation */
  position: fixed;
}

main {
  margin-top: 0px;
}

nav {
  width: var(--menu-width);
  display: flex;
  transform-style: preserve-3d;
  justify-content: space-evenly;
  position: relative;
  z-index: 1000;
  margin: 0px auto;
  perspective: 2000px;
  flex-wrap: wrap;

}


nav .menu-item {
  color: white;
  font-weight: 600;
  transform-style: preserve-3d;
  flex-grow: 1;
  display: flex;
  flex-basis: var(--item-width);
  box-sizing: border-box;
  padding: 1em 1.5em;
  justify-content: center;
  perspective: 200px;
  letter-spacing: 0.5px;
  min-height: 7.5em;
  align-items: center;
}

nav .menu-text,
nav .menu-text a {
  font-size: 1em;
  color: white;
  text-decoration: none;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: color 0.1s ease-out;
  text-align: center;
}

nav .menu-text a {
  text-decoration: none;
}

nav .menu-text a:hover {
  color: rgba(255, 255, 255, 0.5);
}

#sub-menu-holder {
  pointer-events: none;
  color: rgba(0, 0, 0, 0.5);
  font-weight: normal;
  padding: 1em;
  position: absolute;
  transition: opacity 2 ease-out;
  transform: rotateX(-25deg) scale(1);
  transform-origin: 50% 7em 0em;
  opacity: 0;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  top: 3rem;
  border-radius: 10px;
  background: white;
  display: block;
  height: 300px;
  width: calc(var(--menu-width) * 1.5);
}

#sub-menu-container {
  position: absolute;
  z-index: -1;
  min-width: 100%;
  top: 2.5em;
  width: 100%;
}

nav .menu-item:hover~#sub-menu-container #sub-menu-holder {
  animation: clipPath 0.25s ease-out 1 forwards;
  transition: clip-path 0.25s ease-out, left 0.15s ease-out, height 0.15s ease-out;
  opacity: 1;
  right: auto;
}

nav .menu-item:nth-of-type(1):hover~#sub-menu-container #sub-menu-holder,
nav .menu-item:nth-of-type(4):hover~#sub-menu-container #sub-menu-holder {
  clip-path: inset(0 28.75em 0 0 round 10px);
  height: 10em;
}

nav .menu-item:nth-of-type(2):hover~#sub-menu-container #sub-menu-holder,
nav .menu-item:nth-of-type(3):hover~#sub-menu-container #sub-menu-holder {
  clip-path: inset(0 15em 0 0 round 10px);
}

nav .menu-item:nth-of-type(1):hover~#sub-menu-container #sub-menu-holder {
  left: calc(-9em + -1px);
}

nav .menu-item:nth-of-type(2):hover~#sub-menu-container #sub-menu-holder {
  left: calc(-6.5em + -1px);
  height: 18.75em;
}

nav .menu-item:nth-of-type(3):hover~#sub-menu-container #sub-menu-holder {
  left: calc(2.75em + 1px);
  height: 24.5em;
}

nav .menu-item:nth-of-type(4):hover~#sub-menu-container #sub-menu-holder {
  left: calc(19em + 1px);
}

.menu-item .sub-menu {
  position: absolute;
  top: 7em;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-width: 27.5em;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 999;
  margin-left: -5em;
  clip-path: inset(0 10em 10em 15em);
  opacity: 0;
  font-weight: initial;
  padding: 1.5em;

  transition: all 0.25s ease-out, opacity 0.25s ease-in, margin-left 0.25s ease-out, clip-path 0.15s ease-out;
}

.menu-item .sub-menu.double {
  min-width: 41.25em;
  height: 18.75em;
  display: grid;
  grid-template-columns: 54% 50%;
}

.menu-item .sub-menu.triple {
  min-width: 41.25em;
  height: 25em;
  display: grid;
  padding: 1.5em 2.5em;
  grid-template-columns: 55% 45%;
}

.menu-item:hover .sub-menu {
  pointer-events: all;
  clip-path: inset(0 0 0 0);
}

.menu-text:after {
  transition: bottom 0.25s ease-out, opacity 0.01s ease-out 0.01s;
  opacity: 0;
  content: '';
  position: absolute;
  pointer-events: none;
  bottom: -5em;
  left: calc(50% - 10px);
  border-color: transparent transparent white transparent;
  border-width: 10px;
  border-style: solid;
}

.menu-item:hover .menu-text:after {
  bottom: 0.5em;
  opacity: 1;
  transition: bottom 0.25s ease-out, opacity 0.01s ease-out 0.15s;
}

.menu-item:hover .sub-menu {
  opacity: 1;
  margin-left: 0;
}

.menu-item:hover~#sub-menu-container #sub-menu-holder {
  transition: transform 0.25s ease-out, opacity 0.25s ease-out, clip-path 0.25s ease-out;
}

@keyframes clipPath {
  0% {
    opacity: 0;
  }

  100% {
    transform: rotateX(0deg) scale(1);
    top: 4.5em;
    opacity: 1;
  }
}

/* Menu specific */



.menu-item .title {
  font-weight: 500;
  color: rgb(44 70 86);
  margin: 0 0 0.25em 0;
  text-align: left;
}

.menu-item .icon-box * {
  transition: all 0.1s ease-out;
  position: relative;
}

.menu-item .icon-box.space {
  margin-bottom: 1.25em;
}

.menu-item .icon-box.flat {
  height: 1.5em;
  margin-bottom: 0.5em;
}

.menu-item .icon,
.menu-item .text {
  float: left;
  color: #9ea9af;
}

.menu-item .icon {
  color: rgb(44 70 86);
  font-size: 1.25em;
  margin: 0 1em 0 0;
}

.menu-item .icon-box {
  cursor: pointer;
}

.menu-item .icon-box {
  float: left;
  width: 100%;
  margin: 0;
  height: 4em;
  row-gap: 0;
  line-height: 1em;
}

.menu-item .icon-box .text i {
  clip-path: inset(0 100% 0 0);
  font-size: 0.75em;
  position: relative;
  top: -1px;
}



/* Base Icon Style */
.icon-box.gb .icon i:before {
  background: linear-gradient(45deg, #0c86ef, #0cef9b);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  padding-left: 1px;
}

/* Define Icon Colors */
.icon-box.gb.a .icon i:before {
  background-image: linear-gradient(45deg, #2ca7ff 35%, #31d078 75%);
}

.icon-box.gb.b .icon i:before {
  background-image: linear-gradient(45deg, #f32b2b 35%, #efbe0c 75%);
}

.icon-box.gb.c .icon i:before {
  background-image: linear-gradient(45deg, #7176ff 35%, #b26cea 75%);
}

.icon-box.gb.d .icon i:before {
  background-image: linear-gradient(45deg, #79c76f 35%, #bed09b 75%);
}

.icon-box.gb.e .icon i:before {
  background-image: linear-gradient(45deg, #6082ff 35%, #ff5dbe 75%);
}

.icon-box.gb.f .icon i:before {
  background-image: linear-gradient(45deg, #808080 35%, #bbbbbb 75%);
}

.menu-item .icon-box:hover .text i {
  clip-path: inset(0 0 0 0);
  transition: clip-path 0.1s ease-out;
}

.menu-item .icon-box:hover .icon,
.menu-item .icon-box:hover .title,
.menu-item .icon-box:hover .sub-text {
  color: rgb(89 110 123);
}

#sub-menu-bottom {
  background: #d4e3ea70;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: all 0.25s ease-out, height 0.1s ease-out;
  left: 0;
  width: 100%;
  height: 5em;
}

nav .menu-item:nth-of-type(3).highlight:hover~#sub-menu-container #sub-menu-holder #sub-menu-bottom {
  height: 7.5em;
}

.bottom-container {
  grid-area: 4 / -3 / 4 / 3;
  padding-top: 1.5em;
  color: #3a5260;
  font-weight: 500;
}

.top-container {
  grid-area: 1 / -3 / 1 / 3;
  margin: 0 0 2em 0;
}

.bottom-container a {
  float: right;
  background: linear-gradient(90deg, #8ea4b166, #a3b5bf6b);
  padding: 0.5em 1em;
  border-radius: 100px;
  position: absolute;
  color: #2c4655bf;
  font-weight: bold;
  text-decoration: none;
  right: 1.5em;
  bottom: 1.5em;
}

.bottom-container a:hover {
  background: linear-gradient(90deg, #8ea4b136, #a3b5bf33);
}

.sub-menu h3 {
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgb(44 70 86 / 68%);
  margin: 0.75em 0;
}

.sub-menu .box a {
  width: 100%;
  float: left;
  font-size: 1em;
  line-height: 1.75em;
  color: #7a8a94;
  text-decoration: none;
}

.sub-menu .box a:hover {
  color: rgb(44 70 86);
}

.box {
  margin: 0 0 3em 0;
}

.icon.big i {
  font-size: 1.25em;
  top: 0.2em;
}

nav .menu-item.highlight:hover~#sub-menu-container #sub-menu-holder #sub-menu-bottom {
  opacity: 1;
}

#info-box {
  position: absolute;
  bottom: 2em;
  right: 2em;
}

#info-box ul {
  list-style: none;
}

#info-box a {
  color: white;
  text-decoration: none;
  text-align: right;
  padding: 0.5em 0;
  transition: all 0.1s ease-out;
  display: block;
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: 900;
  letter-spacing: 1px;
}

#info-box a:hover {
  color: rgba(255, 255, 255, 0.5);
}

/* fin css navbar */

/* css tiny-slider */
.tns-outer {
  padding: 0 !important
}

.tns-outer [hidden] {
  display: none !important
}

.tns-outer [aria-controls],
.tns-outer [data-action] {
  cursor: pointer
}

.tns-slider {
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  transition: all 0s
}

.tns-slider>.tns-item {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

.tns-horizontal.tns-subpixel {
  white-space: nowrap
}

.tns-horizontal.tns-subpixel>.tns-item {
  display: inline-block;
  vertical-align: top;
  white-space: normal
}

.tns-horizontal.tns-no-subpixel:after {
  content: '';
  display: table;
  clear: both
}

.tns-horizontal.tns-no-subpixel>.tns-item {
  float: left
}

.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item {
  margin-right: -100%
}

.tns-no-calc {
  position: relative;
  left: 0
}

.tns-gallery {
  position: relative;
  left: 0;
  min-height: 1px
}

.tns-gallery>.tns-item {
  position: absolute;
  left: -100%;
  -webkit-transition: transform 0s, opacity 0s;
  -moz-transition: transform 0s, opacity 0s;
  transition: transform 0s, opacity 0s
}

.tns-gallery>.tns-slide-active {
  position: relative;
  left: auto !important
}

.tns-gallery>.tns-moving {
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  transition: all 0.25s
}

.tns-autowidth {
  display: inline-block
}

.tns-lazy-img {
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  transition: opacity 0.6s;
  opacity: 0.6
}

.tns-lazy-img.tns-complete {
  opacity: 1
}

.tns-ah {
  -webkit-transition: height 0s;
  -moz-transition: height 0s;
  transition: height 0s
}

.tns-ovh {
  overflow: hidden
}

.tns-visually-hidden {
  position: absolute;
  left: -10000em
}

.tns-transparent {
  opacity: 0;
  visibility: hidden
}

.tns-fadeIn {
  opacity: 1;
  filter: alpha(opacity=100);
  z-index: 0
}

.tns-normal,
.tns-fadeOut {
  opacity: 0;
  filter: alpha(opacity=0);
  z-index: -1
}

.tns-vpfix {
  white-space: nowrap
}

.tns-vpfix>div,
.tns-vpfix>li {
  display: inline-block
}

.tns-t-subp2 {
  margin: 0 auto;
  width: 310px;
  position: relative;
  height: 10px;
  overflow: hidden
}

.tns-t-ct {
  width: 2333.3333333%;
  width: -webkit-calc(100% * 70 / 3);
  width: -moz-calc(100% * 70 / 3);
  width: calc(100% * 70 / 3);
  position: absolute;
  right: 0
}

.tns-t-ct:after {
  content: '';
  display: table;
  clear: both
}

.tns-t-ct>div {
  width: 1.4285714%;
  width: -webkit-calc(100% / 70);
  width: -moz-calc(100% / 70);
  width: calc(100% / 70);
  height: 10px;
  float: left
}

/* fin css tiny-slider */


/* Désactiver les effets au survol quand l'écran est trop petit */
@media only screen and (max-width: 1000px) {

  nav {
    width: 100%;
    margin: 0;
  }

  nav .menu-item {
    text-align: center;
    min-height: 0em;
    flex-grow: 0;
    padding: 0.5em 0em;
  }

  nav .menu-text,
  nav .menu-text a {
    font-size: small;
  }

  html.fontawesome-i2svg-active.fontawesome-i2svg-complete body div#app div header nav#menu div.menu-item div.sub-menu {
    display: none;
  }

  html.fontawesome-i2svg-active.fontawesome-i2svg-complete body div#app div header nav#menu div#sub-menu-container {
    display: none;
  }
}


@media only screen and (max-width: 600px) {
  header {
    position: static;
  }
}
</style>

