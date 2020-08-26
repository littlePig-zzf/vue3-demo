import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'

let app = createApp(App)
window.mitt = mitt()

app.use(router).mount('#app')