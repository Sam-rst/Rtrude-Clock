import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importer la page App (home)
import App from './App.vue';

// Importe home component
import MyHome from './components/MyHome.vue'

// Importe Login component
import MyLogin from './components/MyLogin.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/style.scss';

// Créez une instance du routeur Vue
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: MyHome },
      { path: "/login", component: MyLogin },
    ],
});

// Créez votre application Vue
const app = createApp(App);

// Utilisez le plugin VueRouter
app.use(router);

// Montez l'application sur l'élément avec l'ID 'app'
app.mount('#app');
