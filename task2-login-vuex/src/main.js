import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue'
import store from './store/index.js';

import BaseButton from "./components/ui/BaseButton.vue";
import LoginPage from  './components/modules/LoginPage.vue';
import SignUp from "./components/modules/SignUp.vue";
import HomePage from './components/modules/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect:'/signup' },
        { path:'/signup', component: SignUp },
        { path:'/login', component: LoginPage },
        { path:'/home', component: HomePage },
    ],
});

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(store);
app.use(router);

app.mount('#app');
