import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: () => import(/* webpackChunkName: 'main' */ '../views/PageMain/PageMain.vue'),
    },
    {
      path: '/blog',
      name: 'PageBlog',
      component: () => import(/* webpackChunkName: 'blog' */ '../views/PageBlog/PageBlog.vue'),
    },
    {
      path: '/team',
      name: 'PageTeam',
      component: () => import(/* webpackChunkName: 'team' */ '../views/PageTeam/PageTeam.vue'),
    },
    {
      path: '/contact',
      name: 'PageContact',
      component: () => import(/* webpackChunkName: 'contact' */ '../views/PageContact/PageContact.vue'),
    },
    {
      path: '/history',
      name: 'PageHistory',
      component: () => import(/* webpackChunkName: 'history' */ '../views/PageHistory/PageHistory.vue'),
    },
  ],
});
