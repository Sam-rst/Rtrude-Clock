import Vue from 'vue';
import { BootstrapVue, IconsPlugins} from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugins)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

createApp(App).mount('#app')
