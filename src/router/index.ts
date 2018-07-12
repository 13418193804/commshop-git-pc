// declare function require(moduleName: string): any;
import Vue from 'vue';
import Router from 'vue-router';
import NavHeader from '../components/NavHeader.vue';
import App from '../App.vue';
import recommend from '../pages/recommend/recommend.vue';

// ts 按需加载需要@types/webpack-env 这个包
const search = r => require.ensure([], () => r(require('../pages/search/search')));
const test = r => require.ensure([], () => r(require('../pages/test/test')));
const index = r => require.ensure([], () => r(require('../pages/index/Index')));
const TabContainer = r => require.ensure([], () => r(require('../components/TabContainer')));

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/center',
            component: r => require.ensure([], () => r(require('../pages/index/Center'))),
            children: [
                {
                    path: '/center',
                    name: 'center',
                    component: r => require.ensure([], () => r(require('../pages/index/mine')))
                },
                {
                    path: '/collection',
                    name: 'collection',
                    component: r => require.ensure([], () => r(require('../pages/collection/collection')))
                },
                {
                    path: '/user',
                    name: 'user',
                    component: r => require.ensure([], () => r(require('../pages/index/User')))
                },
                {
                    path: '/messagelist',
                    name: 'messagelist',
                    component: r => require.ensure([], () => r(require('../pages/index/MessageList')))
                },
                {
                    path: '/addresslist',
                    name: 'addresslist',
                    component: r => require.ensure([], () => r(require('../pages/address/addresslist')))
                },
                {
                    path: '/orderlist',
                    name: 'orderlist',
                    component: r => require.ensure([], () => r(require('../pages/order/orderlist')))
                },
                {
                    path: '/my_member',
                    name: 'my_member',
                    component: r => require.ensure([], () => r(require('../pages/reward/my_member')))
                },
                {
                    path: '/my_bankcard',
                    name: 'my_bankcard',
                    component: r => require.ensure([], () => r(require('../pages/bank_card/my_bankcard')))
                },
                {
                    path: '/my_reward',
                    name: 'my_reward',
                    component: r => require.ensure([], () => r(require('../pages/reward/my_reward')))
                },
                {
                    path: '/orderdetail',
                    name: 'orderdetail',
                    component: r => require.ensure([], () => r(require('../pages/order/orderdetail')))
                },
                {
                    path: '/refund',
                    name: 'refund',
                    component: r => require.ensure([], () => r(require('../pages/order/refund')))
                }
            ]
        },
        {
            name: 'index',
            path: '/',
            component: index
        },
        {
            path: '/cart',
            name: 'cart',
            component: r => require.ensure([], () => r(require('../pages/index/cart')))
        },
        {
            path: '/productlist',
            name: 'productlist',
            component: r => require.ensure([], () => r(require('../pages/product/productList')))
        },
        {
            path: '/login',
            name: 'login',
            component: r => require.ensure([], () => r(require('../pages/login/login')))
        },
        {
            path: '/sign',
            name: 'sign',
            component: r => require.ensure([], () => r(require('../pages/login/sign')))
        },
        {
            path: '/productdetail',
            name: 'productdetail',
            component: r => require.ensure([], () => r(require('../pages/product/productDetail')))
        },
        {
            path: '/productclassify',
            name: 'productclassify',
            component: r => require.ensure([], () => r(require('../pages/product/productClassify')))
        },
        {
            path: '/settle',
            name: 'settle',
            component: r => require.ensure([], () => r(require('../pages/order/settle')))
        },
        {
            path: '/address',
            name: 'address',
            component: r => require.ensure([], () => r(require('../pages/address/address')))
        },
        {
            path: '/selectaddress',
            name: 'selectaddress',
            component: r => require.ensure([], () => r(require('../pages/address/selectaddress')))
        },
    
        {
            path: '/pay',
            name: 'pay',
            component: r => require.ensure([], () => r(require('../pages/order/pay')))
        },
        {
            path: '/paysuccess',
            name: 'paysuccess',
            component: r => require.ensure([], () => r(require('../pages/order/paysuccess')))
        },
     
        {
            path: '/ship',
            name: 'ship',
            component: r => require.ensure([], () => r(require('../pages/order/ship')))
        },
        {
            path: '/forget',
            name: 'forget',
            component: r => require.ensure([], () => r(require('../pages/login/forget')))
        },
   
        {
            path: '/add_bank_card',
            name: 'add_bank_card',
            component: r => require.ensure([], () => r(require('../pages/bank_card/add_bank_card')))
        },
        {
            path: '/about_us',
            name: 'about_us',
            component: r => require.ensure([], () => r(require('../pages/setting/about_us')))
        },
        {
            path: '/essential_information',
            name: 'essential_information',
            component: r => require.ensure([], () => r(require('../pages/setting/essential_information')))
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: r => require.ensure([], () => r(require('../pages/setting/feedback')))
        },
        {
            path: '/update_info',
            name: 'update_info',
            component: r => require.ensure([], () => r(require('../pages/setting/update_info')))
        },
        {
            path: '/setting',
            name: 'setting',
            component: r => require.ensure([], () => r(require('../pages/setting/setting')))
        },
        {
            path: '/reward',
            name: 'reward',
            component: r => require.ensure([], () => r(require('../pages/reward/reward')))
        },
        {
            path: '/present_record',
            name: 'present_record',
            component: r => require.ensure([], () => r(require('../pages/reward/present_record')))
        },
        {
            path: '/select_bankcard',
            name: 'select_bankcard',
            component: r => require.ensure([], () => r(require('../pages/reward/select_bankcard')))
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: r => require.ensure([], () => r(require('../pages/coupon/coupon')))
        },
        {
            path: '/collar_center',
            name: 'collar_center',
            component: r => require.ensure([], () => r(require('../pages/coupon/collar_center')))
        },
        {
            path: '/refundbackgoods',
            name: 'refundbackgoods',
            component: r => require.ensure([], () => r(require('../pages/order/refundBackGoods.vue')))
        },
        {
            path: '/goodscomment',
            name: 'goodscomment',
            component: r => require.ensure([], () => r(require('../pages/comment/goodscomment.vue')))
        },
        {
            path: '/invoice',
            name: 'invoice',
            component: r => require.ensure([], () => r(require('../pages/order/invoice.vue')))
        },
        {
            path: '/addcomment',
            name: 'addcomment',
            component: r => require.ensure([], () => r(require('../pages/comment/addcomment.vue')))
        },
        {
            path: '/filterproduct',
            name: 'filterproduct',
            component: r => require.ensure([], () => r(require('../pages/index/FilterProduct.vue')))
        },
        {
            path: '/share_code',
            name: 'share_code',
            component: r => require.ensure([], () => r(require('../pages/setting/share_code.vue')))
        },
    ]
}
);
