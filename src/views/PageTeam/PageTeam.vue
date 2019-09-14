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
          fill="#F96167"
          cx="400"
          cy="400"
          r="600"
        />
        <circle
          class="page__circle--two"
          fill="#FCE77D"
          cx="400"
          cy="400"
          r="500"
        />
        <circle
          class="page__circle--three"
          fill="#F96167"
          cx="400"
          cy="400"
          r="400"
        />
        <circle
          class="page__circle--four"
          fill="#FCE77D"
          cx="400"
          cy="400"
          r="300"
        />
        <circle
          class="page__circle--five"
          fill="#F96167"
          cx="400"
          cy="400"
          r="200"
        />
        <circle
          class="page__circle--six"
          fill="#FCE77D"
          cx="400"
          cy="400"
          r="100"
        />
        <circle
          class="page__circle--seven"
          fill="#F96167"
          cx="400"
          cy="400"
          r="50"
          @click="$router.go(-1)"
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
      outAnimationInstance: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.inAnimation();
    });
  },
  destroyed() {
    this.inAnimationInstance = null;
    this.outAnimationInstance = null;
  },
  methods: {
    inAnimation() {
      this.inAnimationInstance = anime.timeline({
        easing: 'easeInBounce',
        autoplay: true,
        duration: 500,
      });
      this.inAnimationInstance.add({
        targets: '.page__circle--seven',
        easing: 'easeInCirc',
        duration: 300,
        r: [0, 50],
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
  beforeRouteLeave(to, from, next) {
    this.outAnimationInstance = anime.timeline({
      easing: 'linear',
      duration: 500,
      complete(anim) {
        if (anim.completed) {
          next();
        }
      },
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--one',
      r: [600, 0],
    });
    this.outAnimationInstance.add({
      targets: '.page__circle--two',
      r: [500, 0],
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--three',
      r: [400, 0],
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--four',
      r: [300, 0],
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--five',
      r: [200, 0],
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--six',
      r: [100, 0],
    });

    this.outAnimationInstance.add({
      targets: '.page__circle--seven',
      duration: 300,
      r: [50, 0],
    });
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
