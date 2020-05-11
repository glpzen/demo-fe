<template>
    <v-card>
        <v-card-title>
            Students
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="getStudents"
                :search="search"
        >
            <template v-slot:item.id="{ item }">
                <v-chip small color="red" dark @click="view(item)">View Guardian</v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import axios from "axios";
    export default {
        name: "StudentList",
        data () {
            return {
                search: '',
                headers: [
                    { text: 'Name', align: 'left', value: 'name',},
                    { text: 'Surname', value: 'surname' },
                    { text: 'Created', value: 'created_at' },
                    { text: 'Access Code', value: 'guardian_access_code' },
                    { text: 'View Guardian', value: 'id' },
                ]
            }
        },
        computed: {
            ...mapGetters(['getStudents'])
        },
        methods: {
            ...mapActions(['setStudents']),
            view(item){
                axios.get(`/students/${item.id}/guardians`).then(response => {
                    if(200 === response.status){
                        alert(JSON.stringify(response.data.data.guardian));
                    }
                });
            }
        },
        created(){

            console.log(1212);

            this.setStudents();
        }
    }
</script>