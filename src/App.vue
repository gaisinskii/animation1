<template>
  <div id="app">
    <template v-if="!loader">
      <router-view />
    </template>
    <initial-loader :loading="loader" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InitialLoader from '@/components/InitialLoader/InitialLoader.vue';

export default {
  components: {
    InitialLoader,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['loader']),
  },
  created() {
    this.mockInitialLoading();
  },
  methods: {
    mockInitialLoading() {
      this.$store.dispatch('mockInitialLoading');
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
