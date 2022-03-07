export default {
    login(context) {
        context.commit('setAuthentication', {auth: true });
    },
    logout(context) {
        context.commit('setAuthentication', {auth: false });
    },
    setLoginUser(context, payload) {
        context.commit('setLoginUser', payload);
    },
    addNewUser(context, payload) {
        context.commit('addNewUser', payload);
    }
};