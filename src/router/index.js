import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import HelloWorld from '@/components/HelloWorld';
import goods from '@/components/goods/goods';
import rating from '@/components/rating/rating';
import seller from '@/components/seller/seller';

import '../common/stylus/index.styl';

Vue.use(Router);
Vue.use(VueResource);
export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/rating',
      name: 'rating',
      component: rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
});
