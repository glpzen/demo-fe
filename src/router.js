import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Dashboard from "./components/Dashboard";
import Guardian from "./components/guardian/Guardian";
import GuardianUpdate from "./components/guardian/GuardianUpdate";
import Student from "./components/student/Student";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/guardians',
            name: 'guardians',
            component: Guardian
        },
        {
            path: '/guardians/:id/edit',
            name: 'guardians.update',
            component: GuardianUpdate
        },
        {
            path: '/students',
            name: 'students',
            component: Student
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {path: '*', redirect: '/'}
    ],
});
