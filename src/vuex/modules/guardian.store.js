import axios from "axios";

const state = {
    guardians: []
};

const mutations = {
    setGuardians(state, guardians){
        state.guardians = guardians;
    }
};

const actions = {
    async setGuardians(context){
        let response = await axios.get("/guardians");
        if(200 === response.status){
            context.commit("setGuardians", response.data.data.guardians);
        }
    }
};

const getters = {
    getGuardians(state){
        return state.guardians;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

