<template>
  <header>
    <NavBar />
  </header>

  <body>
    <main>
      <MyHome />
      <MyLiaison />
    </main>
    <footer class="footer-section">
      <MyFooter />
    </footer>
  </body>
</template>


<script>

import NavBar from "./components/NavBar.vue";
import MyHome from "./components/MyHome.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyHome,
    MyFooter,
  },

};


</script>

<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh;
  overflow-y: auto; */
}


:root {
  --menu-width: 37.5em;
  /* Width of menu */
  --items: 4;
  /* Number of items you have */
  --item-width: calc(var(--menu-width) / var(--items));
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, #102eff, #d2379b);
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
}

nav {
  width: var(--menu-width);
  display: flex;
  transform-style: preserve-3d;
  justify-content: space-evenly;
  position: relative;
  z-index: 2;
  margin: 0px auto;
  perspective: 2000px;
  flex-wrap: wrap;
  top: 3em;
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
  height: 14em;
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


body {
  overflow-x: hidden;
  position: relative;
}

body {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 28px;
  color: #6a6a6a;
  font-size: 14px;
  background-color: #eff2f1;
}

a {
  text-decoration: none;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  color: #2f2f2f;
  text-decoration: underline;
}

a:hover {
  color: #2f2f2f;
  text-decoration: none;
}

a.more {
  font-weight: 600;
}

.custom-navbar {
  background: #3b5d50 !important;
  padding-top: 20px;
  padding-bottom: 20px;
}

.custom-navbar .navbar-brand {
  font-size: 32px;
  font-weight: 600;
}

.custom-navbar .navbar-brand>span {
  opacity: .4;
}

.custom-navbar .navbar-toggler {
  border-color: transparent;
}

.custom-navbar .navbar-toggler:active,
.custom-navbar .navbar-toggler:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}

@media (min-width: 992px) {
  .custom-navbar .custom-navbar-nav li {
    margin-left: 15px;
    margin-right: 15px;
  }
}

.custom-navbar .custom-navbar-nav li a {
  font-weight: 500;
  color: #ffffff !important;
  opacity: .5;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  position: relative;
}

@media (min-width: 768px) {
  .custom-navbar .custom-navbar-nav li a:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    background: #f9bf29;
    height: 5px;
    opacity: 1;
    visibility: visible;
    width: 0;
    -webkit-transition: .15s all ease-out;
    -o-transition: .15s all ease-out;
    transition: .15s all ease-out;
  }
}

.custom-navbar .custom-navbar-nav li a:hover {
  opacity: 1;
}

.custom-navbar .custom-navbar-nav li a:hover:before {
  width: calc(100% - 16px);
}

.custom-navbar .custom-navbar-nav li.active a {
  opacity: 1;
}

.custom-navbar .custom-navbar-nav li.active a:before {
  width: calc(100% - 16px);
}

.custom-navbar .custom-navbar-cta {
  margin-left: 0 !important;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

@media (min-width: 768px) {
  .custom-navbar .custom-navbar-cta {
    margin-left: 40px !important;
  }
}

.custom-navbar .custom-navbar-cta li {
  margin-left: 0px;
  margin-right: 0px;
}

.custom-navbar .custom-navbar-cta li:first-child {
  margin-right: 20px;
}

.hero {
  background: #3b5d50;
  padding: calc(4rem - 30px) 0 0rem 0;
}

@media (min-width: 768px) {
  .hero {
    padding: calc(4rem - 30px) 0 4rem 0;
  }
}

@media (min-width: 992px) {
  .hero {
    padding: calc(8rem - 30px) 0 8rem 0;
  }
}

.hero .intro-excerpt {
  position: relative;
  z-index: 4;
}

@media (min-width: 992px) {
  .hero .intro-excerpt {
    max-width: 450px;
  }
}

.hero h1 {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 30px;
}

@media (min-width: 1400px) {
  .hero h1 {
    font-size: 54px;
  }
}

.hero p {
  color: rgba(255, 255, 255, 0.5);
  margin-botom: 30px;
}

.hero .hero-img-wrap {
  position: relative;
}

.hero .hero-img-wrap img {
  position: relative;
  top: 0px;
  right: 0px;
  z-index: 2;
  max-width: 780px;
  left: -20px;
}

@media (min-width: 768px) {
  .hero .hero-img-wrap img {
    right: 0px;
    left: -100px;
  }
}

@media (min-width: 992px) {
  .hero .hero-img-wrap img {
    left: 0px;
    top: -80px;
    position: absolute;
    right: -50px;
  }
}

@media (min-width: 1200px) {
  .hero .hero-img-wrap img {
    left: 0px;
    top: -80px;
    right: -100px;
  }
}

.hero .hero-img-wrap:after {
  content: "";
  position: absolute;
  width: 255px;
  height: 217px;
  background-image: url("assets/images/dots-light.svg");
  background-size: contain;
  background-repeat: no-repeat;
  right: -100px;
  top: -0px;
}

@media (min-width: 1200px) {
  .hero .hero-img-wrap:after {
    top: -40px;
  }
}

.btn {
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  color: #ffffff;
  background: #2f2f2f;
  border-color: #2f2f2f;
}

.btn:hover {
  color: #ffffff;
  background: #222222;
  border-color: #222222;
}

.btn:active,
.btn:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn.btn-primary {
  background: #3b5d50;
  border-color: #3b5d50;
}

.btn.btn-primary:hover {
  background: #314d43;
  border-color: #314d43;
}

.btn.btn-secondary {
  color: #2f2f2f;
  background: #f9bf29;
  border-color: #f9bf29;
}

.btn.btn-secondary:hover {
  background: #f8b810;
  border-color: #f8b810;
}

.btn.btn-white-outline {
  background: transparent;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3);
}

.btn.btn-white-outline:hover {
  border-color: white;
  color: #ffffff;
}

.section-title {
  color: #2f2f2f;
}

.product-section {
  padding: 7rem 0;
}

.product-section .product-item {
  text-align: center;
  text-decoration: none;
  display: block;
  position: relative;
  padding-bottom: 50px;
  cursor: pointer;
}

.product-section .product-item .product-thumbnail {
  margin-bottom: 30px;
  position: relative;
  top: 0;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.product-section .product-item h3 {
  font-weight: 600;
  font-size: 16px;
}

.product-section .product-item strong {
  font-weight: 800 !important;
  font-size: 18px !important;
}

.product-section .product-item h3,
.product-section .product-item strong {
  color: #2f2f2f;
  text-decoration: none;
}

.product-section .product-item .icon-cross {
  position: absolute;
  width: 35px;
  height: 35px;
  display: inline-block;
  background: #2f2f2f;
  bottom: 15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-bottom: -17.5px;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.product-section .product-item .icon-cross img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.product-section .product-item:before {
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  content: "";
  background: #dce5e4;
  height: 0%;
  z-index: -1;
  border-radius: 10px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.product-section .product-item:hover .product-thumbnail {
  top: -25px;
}

.product-section .product-item:hover .icon-cross {
  bottom: 0;
  opacity: 1;
  visibility: visible;
}

.product-section .product-item:hover:before {
  height: 70%;
}

.why-choose-section {
  padding: 7rem 0;
}

.why-choose-section .img-wrap {
  position: relative;
}

.why-choose-section .img-wrap:before {
  position: absolute;
  content: "";
  width: 255px;
  height: 217px;
  background-image: url("assets/images/dots-yellow.svg");
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-transform: translate(-40%, -40%);
  -ms-transform: translate(-40%, -40%);
  transform: translate(-40%, -40%);
  z-index: -1;
}

.why-choose-section .img-wrap img {
  border-radius: 20px;
}

.feature {
  margin-bottom: 30px;
}

.feature .icon {
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
}

.feature .icon:before {
  content: "";
  width: 33px;
  height: 33px;
  position: absolute;
  background: rgba(59, 93, 80, 0.2);
  border-radius: 50%;
  right: -8px;
  bottom: 0;
}

.feature h3 {
  font-size: 14px;
  color: #2f2f2f;
}

.feature p {
  font-size: 14px;
  line-height: 22px;
  color: #6a6a6a;
}

.we-help-section {
  padding: 7rem 0;
}

.we-help-section .imgs-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr);
  grid-template-columns: repeat(27, 1fr);
  position: relative;
}

.we-help-section .imgs-grid:before {
  position: absolute;
  content: "";
  width: 255px;
  height: 217px;
  background-image: url("assets/images/dots-green.svg");
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transform: translate(-40%, -40%);
  -ms-transform: translate(-40%, -40%);
  transform: translate(-40%, -40%);
  z-index: -1;
}

.we-help-section .imgs-grid .grid {
  position: relative;
}

.we-help-section .imgs-grid .grid img {
  border-radius: 20px;
  max-width: 100%;
}

.we-help-section .imgs-grid .grid.grid-1 {
  -ms-grid-column: 1;
  -ms-grid-column-span: 18;
  grid-column: 1 / span 18;
  -ms-grid-row: 1;
  -ms-grid-row-span: 27;
  grid-row: 1 / span 27;
}

.we-help-section .imgs-grid .grid.grid-2 {
  -ms-grid-column: 19;
  -ms-grid-column-span: 27;
  grid-column: 19 / span 27;
  -ms-grid-row: 1;
  -ms-grid-row-span: 5;
  grid-row: 1 / span 5;
  padding-left: 20px;
}

.we-help-section .imgs-grid .grid.grid-3 {
  -ms-grid-column: 14;
  -ms-grid-column-span: 16;
  grid-column: 14 / span 16;
  -ms-grid-row: 6;
  -ms-grid-row-span: 27;
  grid-row: 6 / span 27;
  padding-top: 20px;
}

.custom-list {
  width: 100%;
}

.custom-list li {
  display: inline-block;
  width: calc(50% - 20px);
  margin-bottom: 12px;
  line-height: 1.5;
  position: relative;
  padding-left: 20px;
}

.custom-list li:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid #3b5d50;
  position: absolute;
  left: 0;
  top: 8px;
}

.popular-product {
  padding: 0 0 7rem 0;
}

.popular-product .product-item-sm h3 {
  font-size: 14px;
  font-weight: 700;
  color: #2f2f2f;
}

.popular-product .product-item-sm a {
  text-decoration: none;
  color: #2f2f2f;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.popular-product .product-item-sm a:hover {
  color: rgba(47, 47, 47, 0.5);
}

.popular-product .product-item-sm p {
  line-height: 1.4;
  margin-bottom: 10px;
  font-size: 14px;
}

.popular-product .product-item-sm .thumbnail {
  margin-right: 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 120px;
  flex: 0 0 120px;
  position: relative;
}

.popular-product .product-item-sm .thumbnail:before {
  content: "";
  position: absolute;
  border-radius: 20px;
  background: #dce5e4;
  width: 98px;
  height: 98px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -1;
}

.testimonial-section {
  padding: 3rem 0 7rem 0;
}

.testimonial-slider-wrap {
  position: relative;
}

.testimonial-slider-wrap .tns-inner {
  padding-top: 30px;
}

.testimonial-slider-wrap .item .testimonial-block blockquote {
  font-size: 16px;
}

@media (min-width: 768px) {
  .testimonial-slider-wrap .item .testimonial-block blockquote {
    line-height: 32px;
    font-size: 18px;
  }
}

.testimonial-slider-wrap .item .testimonial-block .author-info .author-pic {
  margin-bottom: 20px;
}

.testimonial-slider-wrap .item .testimonial-block .author-info .author-pic img {
  max-width: 80px;
  border-radius: 50%;
}

.testimonial-slider-wrap .item .testimonial-block .author-info h3 {
  font-size: 14px;
  font-weight: 700;
  color: #2f2f2f;
  margin-bottom: 0;
}

.testimonial-slider-wrap #testimonial-nav {
  position: absolute;
  top: 50%;
  z-index: 99;
  width: 100%;
  display: none;
}

@media (min-width: 768px) {
  .testimonial-slider-wrap #testimonial-nav {
    display: block;
  }
}

.testimonial-slider-wrap #testimonial-nav>span {
  cursor: pointer;
  position: absolute;
  width: 58px;
  height: 58px;
  line-height: 58px;
  border-radius: 50%;
  background: rgba(59, 93, 80, 0.1);
  color: #2f2f2f;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.testimonial-slider-wrap #testimonial-nav>span:hover {
  background: #3b5d50;
  color: #ffffff;
}

.testimonial-slider-wrap #testimonial-nav .prev {
  left: -10px;
}

.testimonial-slider-wrap #testimonial-nav .next {
  right: 0;
}

.testimonial-slider-wrap .tns-nav {
  position: absolute;
  bottom: -50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.testimonial-slider-wrap .tns-nav button {
  background: none;
  border: none;
  display: inline-block;
  position: relative;
  width: 0 !important;
  height: 7px !important;
  margin: 2px;
}

.testimonial-slider-wrap .tns-nav button:active,
.testimonial-slider-wrap .tns-nav button:focus,
.testimonial-slider-wrap .tns-nav button:hover {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: none;
}

.testimonial-slider-wrap .tns-nav button:before {
  display: block;
  width: 7px;
  height: 7px;
  left: 0;
  top: 0;
  position: absolute;
  content: "";
  border-radius: 50%;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  background-color: #d6d6d6;
}

.testimonial-slider-wrap .tns-nav button:hover:before,
.testimonial-slider-wrap .tns-nav button.tns-nav-active:before {
  background-color: #3b5d50;
}

.before-footer-section {
  padding: 7rem 0 12rem 0 !important;
}

.blog-section {
  padding: 7rem 0 12rem 0;
}

.blog-section .post-entry a {
  text-decoration: none;
}

.blog-section .post-entry .post-thumbnail {
  display: block;
  margin-bottom: 20px;
}

.blog-section .post-entry .post-thumbnail img {
  border-radius: 20px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.blog-section .post-entry .post-content-entry {
  padding-left: 15px;
  padding-right: 15px;
}

.blog-section .post-entry .post-content-entry h3 {
  font-size: 16px;
  margin-bottom: 0;
  font-weight: 600;
  margin-bottom: 7px;
}

.blog-section .post-entry .post-content-entry .meta {
  font-size: 14px;
}

.blog-section .post-entry .post-content-entry .meta a {
  font-weight: 600;
}

.blog-section .post-entry:hover .post-thumbnail img,
.blog-section .post-entry:focus .post-thumbnail img {
  opacity: .7;
}

.footer-section {
  padding: 80px 0;
  background: #ffffff;
}

.footer-section .relative {
  position: relative;
}

.footer-section a {
  text-decoration: none;
  color: #2f2f2f;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.footer-section a:hover {
  color: rgba(47, 47, 47, 0.5);
}

.footer-section .subscription-form {
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  margin-top: 100px;
}

@media (min-width: 992px) {
  .footer-section .subscription-form {
    margin-top: 0px;
    margin-bottom: 80px;
  }
}

.footer-section .subscription-form h3 {
  font-size: 18px;
  font-weight: 500;
  color: #3b5d50;
}

.footer-section .subscription-form .form-control {
  height: 50px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
}

.footer-section .subscription-form .form-control:active,
.footer-section .subscription-form .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #3b5d50;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}

.footer-section .subscription-form .form-control::-webkit-input-placeholder {
  font-size: 14px;
}

.footer-section .subscription-form .form-control::-moz-placeholder {
  font-size: 14px;
}

.footer-section .subscription-form .form-control:-ms-input-placeholder {
  font-size: 14px;
}

.footer-section .subscription-form .form-control:-moz-placeholder {
  font-size: 14px;
}

.footer-section .subscription-form .btn {
  border-radius: 10px !important;
}

.footer-section .sofa-img {
  position: absolute;
  top: -200px;
  z-index: 1;
  right: 0;
}

.footer-section .sofa-img img {
  max-width: 380px;
}

.footer-section .links-wrap {
  margin-top: 0px;
}

@media (min-width: 992px) {
  .footer-section .links-wrap {
    margin-top: 54px;
  }
}

.footer-section .links-wrap ul li {
  margin-bottom: 10px;
}

.footer-section .footer-logo-wrap .footer-logo {
  font-size: 32px;
  font-weight: 500;
  text-decoration: none;
  color: #3b5d50;
}

.footer-section .custom-social li {
  margin: 2px;
  display: inline-block;
}

.footer-section .custom-social li a {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  background: #dce5e4;
  color: #3b5d50;
  border-radius: 50%;
}

.footer-section .custom-social li a:hover {
  background: #3b5d50;
  color: #ffffff;
}

.footer-section .border-top {
  border-color: #dce5e4;
}

.footer-section .border-top.copyright {
  font-size: 14px !important;
}

.untree_co-section {
  padding: 7rem 0;
}

.form-control {
  height: 50px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
}

.form-control:active,
.form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #3b5d50;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}

.form-control::-webkit-input-placeholder {
  font-size: 14px;
}

.form-control::-moz-placeholder {
  font-size: 14px;
}

.form-control:-ms-input-placeholder {
  font-size: 14px;
}

.form-control:-moz-placeholder {
  font-size: 14px;
}

.service {
  line-height: 1.5;
}

.service .service-icon {
  border-radius: 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50px;
  flex: 0 0 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #3b5d50;
  margin-right: 20px;
  color: #ffffff;
}

textarea {
  height: auto !important;
}

.site-blocks-table {
  overflow: auto;
}

.site-blocks-table .product-thumbnail {
  width: 200px;
}

.site-blocks-table .btn {
  padding: 2px 10px;
}

.site-blocks-table thead th {
  padding: 30px;
  text-align: center;
  border-width: 0px !important;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
}

.site-blocks-table td {
  padding: 20px;
  text-align: center;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.8);
}

.site-blocks-table tbody tr:first-child td {
  border-top: 1px solid #3b5d50 !important;
}

.site-blocks-table .btn {
  background: none !important;
  color: #000000;
  border: none;
  height: auto !important;
}

.site-block-order-table th {
  border-top: none !important;
  border-bottom-width: 1px !important;
}

.site-block-order-table td,
.site-block-order-table th {
  color: #000000;
}

.couponcode-wrap input {
  border-radius: 10px !important;
}

.text-primary {
  color: #3b5d50 !important;
}

.thankyou-icon {
  position: relative;
  color: #3b5d50;
}

.thankyou-icon:before {
  position: absolute;
  content: "";
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(59, 93, 80, 0.2);
}
</style>
