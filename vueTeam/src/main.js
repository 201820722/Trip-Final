import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.min.css' 
// import 'bootstrap-vue/dist/bootstrap-vue.css' 

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
// })

const app = createApp(App)

app.use(router)

app.mount('#app')
