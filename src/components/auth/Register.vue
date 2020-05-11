<template>
    <div>
        <div class="row">
            <div class="col-4">
                <h1>Guardian Register Form</h1>
                <router-link to="/login">Sign In</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <form v-on:submit.prevent>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <label for="surname">Surname</label>
                        <input type="text" class="form-control" id="surname" v-model="surname" placeholder="Surname">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password ">
                    </div>
                    <div class="form-group">
                        <label for="access_code">Access Code</label>
                        <input type="text" class="form-control" id="access_code" v-model="access_code" placeholder="Code">
                    </div>
                    <button @click="register()" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapActions } from "vuex";
    import axios from "axios";
    export default {
        name: 'Register',
        data: function () {
            return {
                name: null,
                surname: null,
                email: null,
                password: null,
                access_code: null
            }
        },
        methods: {
            ...mapActions(['register']),
            async register(){

                let payload = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                    access_code: this.access_code
                };

                let response = await axios.post("/guardians", payload);
                console.log(response);
                if(201 === response.status){
                    alert("User has been registered.")
                    this.$router.push("/login");
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
