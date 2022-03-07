import { createStore } from 'vuex';

import LoginModule from './LoginModule/index.js';


const store = createStore({
    modules: {
        login: LoginModule
    }
});

export default store;

