<template>
  <section>
    <!-- <form @submit.prevent="authUser"> -->
    <div>
      <h2 class="login-title">Sign Up</h2>
    </div>

    <div class="form-layout">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>

    <div class="form-layout">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model.trim="password" />
    </div>

    <div class="form-layout">
        <base-button @click="addUser" >SignUp</base-button> 
        <router-link to="/login">Go For Login</router-link>
    </div>
    <!-- </form> -->
  </section>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    addUser() {
      console.log(this.email)
      console.log(this.password)
      if(this.email !== '' && this.password !== '') {
        sessionStorage.setItem(this.email, this.password);
        this.$router.replace("/login");
      }
      // this.$store.dispatch("login/addNewUser", {
      //   user: {
      //     email: this.email,
      //     password: this.password,
      //   },
      // });
      this.clearField();
    },
    clearField() {
        this.email = "";
        this.password = "";
    }
  },
};
</script>

<style scoped>
.login-title {
  padding-top: 5%;
}

.form-layout {
    padding-top: 5%;
    display: flex;
    text-align: center;
}

.btn {
  margin-top: 2%;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
