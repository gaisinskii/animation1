import Vue from 'vue';
import Router from 'vue-router';
import PageInitialLoader from '@/views/PageInitialLoader/PageInitialLoader.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageInitialLoader',
      component: PageInitialLoader,
    },
    {
      path: '/main',
      name: 'PageMain',
      component: () => import(/* webpackChunkName: 'main' */ '../views/PageMain/PageMain.vue'),
    },
  ],
});
