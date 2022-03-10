export default {
    // login(state, payload) {
    //     const userData = state.getters.users;
        
    //     userData.forEach((element) => {
    //       if (element.email === this.email) {
    //         if (element.password === this.password) {
    //           // ..
    //           sessionStorage.setItem(this.email, this.password);
    //           this.$store.dispatch("login/login");
    //           this.$store.dispatch("login/setLoginUser", {
    //               userName: this.email 
    //           });
    //           this.$router.push("/home");
    //         } else {
    //           // ..
    //           alert("Password Does not match...");
    //         }
    //       }
    //     });
    // }
    // ,
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