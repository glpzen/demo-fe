import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth.store";
import guardian from "./modules/guardian.store";
import student from "./modules/student.store";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    mutations : {

    },
    actions : {

    },
    getters: {

    },
    modules: {
        auth, guardian, student
    }
});

export default store;
