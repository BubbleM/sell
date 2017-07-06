// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter); // 安装路由模块
Vue.use(VueResource);// 全局注册

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });
//
// let app = Vue.extend(App);
//
// let router = new VueRouter();
//
// router.map({
//   '/goods': {
//     component: goods
//   }
// });
//
// router.start(app, '#app');

// const Goods = { template: '<div>goods</div>' };
// const Ratings = { template: '<div>ratings</div>' };
// const Seller = { template: '<div>seller</div>' };

const routes = [
  { path: '/', redirect: '/goods' }, // 默认项目启动跳转到goods页面
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
