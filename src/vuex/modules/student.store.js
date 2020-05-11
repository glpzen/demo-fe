import axios from "axios";

const state = {
    students: []
};

const mutations = {
    setStudents(state, students){
        state.students = students;
    }
};

const actions = {
    async setStudents(context){

        let response = await axios.get("/students");
        if(200 === response.status){
            context.commit("setStudents", response.data.data.students);
        }
    }
};

const getters = {
    getStudents(state){
        return state.students;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

