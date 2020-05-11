<template>
    <div>
        <div class="row">
            <div class="col-4">
                <h1>Guardian Update Form</h1>
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
                    <button @click="update()" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: 'GuardianUpdate',
        data: function () {
            return {
                name: null,
                surname: null,
                email: null,
                password: null,
                access_code: null
            }
        },
        computed: {
            ...mapGetters(['getGuardian'])
        },
        methods: {
            ...mapActions(['setGuardian']),
            async update(){

                let payload = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password
                };

                let response = await axios.patch(`/guardians/${this.$route.params.id}`, payload);
                console.log(response);
                if(204 === response.status){
                    alert("User has been updated.");
                    this.$router.push("/guardians");
                }else{
                    for (const [key] of Object.entries(response.data.errors)) {
                        alert(response.data.errors[key]);
                    }
                }
            }
        },
        created() {
            this.setGuardian(this.$route.params.id).then(() => {
                this.name = this.getGuardian.name;
                this.surname = this.getGuardian.surname;
                this.email = this.getGuardian.email;
            });
        }

    }
</script>

<style scoped>

</style>
