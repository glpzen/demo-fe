<template>
    <div>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/">TURK AI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/guardians">Guardians</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/students">Students</router-link>
                    </li>
                </ul>
                <button v-if="getToken" class="btn btn-warning my-2 my-sm-0" @click="logout()">Log Out</button>
            </div>
        </nav>
    </div>
</template>


<script>
    import { mapActions, mapGetters } from "vuex";
    import axios from "axios";
    export default {
        name: 'Navbar',
        computed: {
            ...mapGetters(['getToken'])
        },
        methods: {
            ...mapActions(['setToken']),
            async logout(){
                let response = await axios.post("/auth/logout");
                if(200 === response.status){
                    this.setToken(null);
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
