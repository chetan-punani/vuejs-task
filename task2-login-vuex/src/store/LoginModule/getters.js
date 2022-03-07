export default {
    usersLoggedIn(state) {
        return state.isLoggedIn;
    },
    users(state) {
        return state.users;
    },
    loginUser(state) {
        return state.loginUser;
    }
};