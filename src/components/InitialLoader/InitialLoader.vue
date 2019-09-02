<template>
  <div
    v-if="loading"
    class="initial-loader"
  >
    haha
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.initial-loader {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>
