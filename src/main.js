import Vue from 'vue';
import App from './components/App.vue';
import {router} from "./router";
import store from "./vuex/index.store";
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false;

console.log(process.env.VUE_APP_API_URL);

router.beforeEach((to, from, next) => {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;

    if(to.name !== 'login' && to.name !== 'register'){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token){
            axios.defaults.headers.common['Authorization'] = `${token.token_type} ${token.access_token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            store.dispatch("setToken", token);
        }else{
            router.push('/login');
        }
    }
    next();
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        store.dispatch('setToken', null);
    }else{
        return error.response;
    }
});



new Vue({
    render: h => h(App),
    vuetify,
    store,
    router: router
}).$mount('#app');
