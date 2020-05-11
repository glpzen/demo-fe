import axios from "axios";

const state = {
    guardian: null,
    guardians: [],
};

const mutations = {
    setGuardians(state, guardians){
        state.guardians = guardians;
    },
    setGuardian(state, guardian){
        state.guardian = guardian;
    }
};

const actions = {
    async setGuardians(context){
        let response = await axios.get("/guardians");
        if(200 === response.status){
            context.commit("setGuardians", response.data.data.guardians);
        }
    },
    async setGuardian(context, id){
        let response = await axios.get(`/guardians/${id}/edit`);
        if(200 === response.status){
            context.commit("setGuardian", response.data.data.guardian);
        }
    }
};

const getters = {
    getGuardians(state){
        return state.guardians;
    },
    getGuardian(state){
        return state.guardian;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

