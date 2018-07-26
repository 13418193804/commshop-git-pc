// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router/index';
import store from './store/';
import VueLazyload from 'vue-lazyload';
import Vant from 'vant';
import Api from './config/fetch';
import MutationTreeType from './store/mutation-types';
import MintUI from 'mint-ui';
import iView from 'iview';

import ElementUI from 'element-ui';



Vue.use(ElementUI);

Vue.use(iView);
Vue.use(MutationTreeType);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/default_pic.jpg'),
    loading: require('./assets/default_pic.jpg'),
    attempt: 1
});
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(Api);
Vue.use(Vant);
Vue.prototype.loginDialog = false
Vue.config.productionTip = false;
const init = new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app');

window['myvue'] = init;
