require('./bootstrap');

import Vue from 'vue';
import store from './store/store';
import routes from './route/index';
import VueRouter from 'vue-router';
import navbar from './components/Navbar';
import pokemons from './components/pokemons/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});


new Vue({
    store,
    router,
    el: '#app',
    components:{
        navbar,
        pokemons
    }
});
