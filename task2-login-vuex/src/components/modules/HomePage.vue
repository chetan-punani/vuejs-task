<template>
    <h2>
        Welcome <span class="name">{{userName}}</span> ....
    </h2>

     <div class="form-layout">
        <base-button @click="userLogout">Logout</base-button>
    </div>
</template>

<script>
export default {
    computed: {
        userName() {
            return this.$store.getters["login/loginUser"]
        }
    },
    methods: {
        userLogout() {
            this.$router.replace("/");
        }
    }
}
</script>

<style scoped>
.name{
    color: blue;
}

.form-layout {
    padding-top: 5%;
    display: flex;
    text-align: center;
}
</style>