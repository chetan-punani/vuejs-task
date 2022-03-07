export default {
    setAuthentication(state, payload){
        state.isLoggedIn = payload.auth;
    },
    addNewUser(state, payload) {
        const userData = payload.user;
        const newUser = {
            email: userData.email,
            password: userData.password
        }
        state.users.push(newUser);
    },
    setLoginUser(state, payload) {
        state.loginUser = payload.userName;
    }
};