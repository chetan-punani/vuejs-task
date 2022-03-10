<template>
  <section>
    <!-- <form @submit.prevent="authUser"> -->
    <div>
      <h2 class="login-title">Login Page</h2>
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
      <base-button @click="authUser">Login</base-button>
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
    authUser() {
      const userPassword = sessionStorage.getItem(this.email);

      if (this.email !== "" && this.password !== "") {
        console.log(userPassword);
        if (userPassword === null) {
          alert("No email address exit, Go to Signup");
          this.$router.push("/");
        } else {
          if (userPassword === this.password) {
            this.$store.dispatch("login/setLoginUser", {
              userName: this.email,
            });
            this.$router.push("/home");
          } else {
            alert("password is wrong!!!");
          }
        }
      } else {
        alert("Please Enter email and password.");
      }

      // const userData = this.$store.getters["login/users"];

      // userData.forEach((element) => {
      //   if (element.email === this.email) {
      //     if (element.password === this.password) {
      //       // ..
      //       sessionStorage.setItem(this.email, this.password);
      //       this.$store.dispatch("login/login");
      //       this.$store.dispatch("login/setLoginUser", {
      //           userName: this.email
      //       });
      //       this.$router.push("/home");
      //     } else {
      //       // ..
      //       alert("Password Does not match...");
      //     }
      //   }
      // });
      this.clearField();
    },
    clearField() {
      this.email = "";
      this.password = "";
    },
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
