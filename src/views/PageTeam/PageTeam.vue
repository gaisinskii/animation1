<template>
  <div class="page page_team">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200%"
      height="200%"
      viewBox="0 0 800 800"
    >
      <g>
        <circle
          class="page__circle--one"
          fill="#000000"
          cx="400"
          cy="400"
          r="600"
        />
        <circle
          class="page__circle--two"
          fill="#180d1c"
          cx="400"
          cy="400"
          r="500"
        />
        <circle
          class="page__circle--three"
          fill="#261431"
          cx="400"
          cy="400"
          r="400"
        />
        <circle
          class="page__circle--four"
          fill="#351947"
          cx="400"
          cy="400"
          r="300"
        />
        <circle
          class="page__circle--five"
          fill="#451e5e"
          cx="400"
          cy="400"
          r="200"
        />
        <circle
          class="page__circle--six"
          fill="#552277"
          cx="400"
          cy="400"
          r="100"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      inAnimationInstance: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.inAnimation();
    });
  },
  methods: {
    inAnimation() {
      this.inAnimationInstance = anime.timeline({
        easing(el, i, total) {
          return function (t) {
            return Math.pow(Math.sin(t * (i + 1)), total);
          };
        },
        autoplay: true,
        duration: 700,
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--six',
        r: [0, 100],
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--five',
        r: [0, 200],
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--four',
        r: [0, 300],
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--three',
        r: [0, 400],
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--two',
        r: [0, 500],
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--one',
        r: [0, 600],
      });
    },
  },
};
</script>

<style lang="scss">
.page_team {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100%;
  .page {
  }
}
</style>
