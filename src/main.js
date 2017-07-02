// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';

Vue.use(VueRouter); // 安装路由模块

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
const Ratings = { template: '<div>ratings</div>' };
const Seller = { template: '<div>seller</div>' };

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
