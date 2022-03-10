export default {
    login(context, payload) {
        context.commit('login', payload);
    },  
    setLoginUser(context, payload) {
        context.commit('setLoginUser', payload);
    },
    addNewUser(context, payload) {
        context.commit('addNewUser', payload);
    }
};