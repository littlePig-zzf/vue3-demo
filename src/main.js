import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App';
import router from './router';

const app = createApp(App);
window.mitt = mitt();

app.use(router).mount('#app');
