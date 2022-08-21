import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import store from './store/'

const app = createApp(App);

app.use(router);
app.use(store)
//app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
