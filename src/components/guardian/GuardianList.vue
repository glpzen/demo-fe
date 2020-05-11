<template>
    <v-card>
        <v-card-title>
            Guardians
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search..."
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="getGuardians"
                :single-expand="singleExpand"
                :expanded.sync="expanded"
                item-key="id"
                show-expand
                class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <!--<v-toolbar-title>Guardians</v-toolbar-title>-->
                    <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>

            <template v-slot:expanded-item="{ item }">
                <td :colspan="headers.length">

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr >
                                <td>{{ item.student.name }}</td>
                                <td>{{ item.student.surname }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "GuardianList",
        data () {
            return {
                search: '',
                expanded: [],
                singleExpand: true,
                headers: [
                    { text: 'Name', align: 'left', value: 'name',},
                    { text: 'Surname', value: 'surname' },
                    { text: 'Email', value: 'email' },
                    { text: 'Created', value: 'created_at' },
                ]
            }
        },
        computed: {
            ...mapGetters(['getGuardians'])
        },
        methods: {
            ...mapActions(['setGuardians'])
        },
        created(){
            this.setGuardians();
        }
    }
</script>