import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: true,
    posts: {},
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    CHANGE_INIT_LOADING_STATE(state, payload) {
      state.loader = payload;
    },
  },
  actions: {
    async mockInitialLoading({ commit }) {
      await api
        .get('/photos')
        .then((res) => {
          commit('GET_POSTS', res.data);
          setTimeout(() => {
            commit('CHANGE_INIT_LOADING_STATE', false);
          }, 2000);
        })
        .catch((error) => {
          console.log('Error fetching posts', error);
        });
    },
  },
});
