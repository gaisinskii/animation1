import Vue from 'vue';
import Router from 'vue-router';
import PageMain from '@/views/PageMain/PageMain.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: PageMain,
    },
  ],
});
