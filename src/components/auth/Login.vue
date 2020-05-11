<template>
    <div>
        <div class="row">
            <div class="col-4">
                <h1>Guardian Login Form</h1>
                <router-link to="/register">Sign Up</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <form v-on:submit.prevent>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password ">
                    </div>
                    <button @click="login()" class="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapActions } from "vuex";
    import axios from "axios";
    export default {
        name: 'Login',
        data: function () {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            ...mapActions(['setToken']),
            async login(){

                let payload = {
                    email: this.email,
                    password: this.password
                };

                let response = await axios.post("/auth/login", payload);
                console.log(response.data);
                if(200 === response.status){
                    this.setToken(response.data);
                    this.$router.push("/");
                }else{
                    for (const [key] of Object.entries(response.data.errors)) {
                        alert(response.data.errors[key]);
                    }
                }
            }
        }

    }
</script>

<style scoped>

</style>
