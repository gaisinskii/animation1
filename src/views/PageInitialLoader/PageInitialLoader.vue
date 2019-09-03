<template>
  <div class="page page_initial-loader">
    <div class="page__layers">
      <div class="page__layer page__layer--one" />
      <div class="page__layer page__layer--two" />
      <div class="page__layer page__layer--three" />
      <div class="page__layer page__layer--four" />
      <div class="page__layer page__layer--five">
        lol
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      tl: null,
      circle: null,
    };
  },
  computed: {
  },
  mounted() {
    this.initAnimation();
    this.play();
  },
  methods: {
    play() {
      this.tl.play();
    },
    initAnimation() {
      const commonSettings = {
        borderRadius: [
          { value: '0%' },
          { value: '50%' },
        ],
        opacity: [
          { value: 0 },
          { value: 1 },
        ],
        scale: [
          { value: 0 },
          { value: 1.5 },
        ],
      };
      const self = this;
      this.tl = anime.timeline({
        elasticity: 1000,
        easing: 'easeOutElastic',
        autoplay: true,
        complete(anim) {
          if (anim.completed) {
            // self.$router.push({ name: 'PageMain' });
          }
        },
      });
      this.tl
        .add({
          targets: '.page__layer--one',
          ...commonSettings,

        })
        .add({
          targets: '.page__layer--two',
          ...commonSettings,
        })
        .add({
          targets: '.page__layer--three',
          ...commonSettings,
        })
        .add({
          targets: '.page__layer--four',
          ...commonSettings,
        })
        .add({
          targets: '.page__layer--five',
          ...commonSettings,
        })
        .add({
          targets: '.page__layer--five',
          rotate: 360,
          duration: 1600,
          autoplay: true,
          loop: true,
        });
    },
  },
};
</script>

<style lang="scss">
.page_initial-loader {
  position: relative;
  height: 100%;
  overflow: hidden;
  .page {
    &__layers {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__layer {
      position: absolute;
      opacity: 0;
      &--one {
        height: 500px;
        width: 500px;
        background: radial-gradient(
          circle 500px at 50% 50%,
          rgba(239, 252, 250, 1) 5.5%,
          rgba(154, 192, 206, 1) 100%
        );
        background-size: 300% 300%;
        animation: colorchange-one 16s ease infinite;
      }
      &--two {
        height: 400px;
        width: 400px;
        background: radial-gradient(
          circle farthest-corner at 50% 50%,
          rgba(251, 222, 238, 1) 15.6%,
          rgba(206, 201, 226, 1) 100.3%
        );
      }
      &--three {
        height: 300px;
        width: 300px;
        background: radial-gradient(
          circle farthest-corner at 50% 50%,
          rgba(255, 156, 156, 1) 0%,
          rgba(179, 201, 241, 1) 90%
        );
        background-size: 300% 300%;
        animation: colorchange-three 12s ease infinite;
      }
      &--four {
        height: 200px;
        width: 200px;
        background: radial-gradient(
          circle farthest-corner at 50% 50%,
          rgba(255, 155, 155, 1) 0%,
          rgba(255, 200, 252, 1) 80.2%
        );
      }
      &--five {
        height: 100px;
        width: 100px;
        background: radial-gradient(
          circle farthest-corner at 50% 50%,
          rgba(37, 22, 131, 1) 0%,
          rgba(97, 170, 231, 1) 70%
        );
      }
    }
  }

  @keyframes colorchange-one {
    0% {
      background-position: 0% 60%;
    }
    50% {
      background-position: 100% 41%;
    }
    100% {
      background-position: 0% 60%;
    }
  }

  @keyframes colorchange-three {
    0% {
      background-position: 40% 21%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 40% 21%;
    }
  }

  @keyframes colorchange-five {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 110% 50%;
    }
    100% {
      background-position: 0% 35%;
    }
  }
}
</style>
