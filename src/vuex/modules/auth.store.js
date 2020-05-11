import {router} from "../../router";


const state = {
    token: null
};

const mutations = {
    setToken(state, token){
        state.token = token;
    }
};

const actions = {
    setToken(context, token){
        context.commit("setToken", token);
        if(token){
            localStorage.setItem('token', JSON.stringify(token));
        }else{
            localStorage.setItem('token', null);
            router.push('/login');
        }
    }
};

const getters = {
    getToken(state){
        return state.token;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

