import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
            loginUser: null,
            users: [
                {
                    email: 'abc@gmail.com',
                    password: 'abcdef'
                },
                {
                    email: 'def@gmail.com',
                    password: 'defghi'
                }
            ]
        };
    },
    mutations,
    actions,
    getters
}
