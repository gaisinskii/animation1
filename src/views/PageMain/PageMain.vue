<template>
  <div class="page page_main">
    <nav
      class="page__nav"
      @mousemove="mouseMoveAnimation($event)"
    >
      <ul
        class="page__list"
        :style="{transform: `translateX(20vw) rotate3d(0, 1, 1, ${defaultNavAngle}deg)`}"
      >
        <li class="page__list-item">
          <router-link
            class="page__link"
            to="/"
          >
            Home
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link
            class="page__link"
            to="/team"
          >
            Team
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link
            class="page__link"
            to="/history"
          >
            History
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link
            class="page__link"
            to="/blog"
          >
            Blog
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link
            class="page__link"
            to="/contact"
          >
            Contact
          </router-link>
        </li>
        </ulclass="page__list">
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angle: 15,
    };
  },
  computed: {
    defaultNavAngle: {
      get() {
        return this.angle;
      },
      set(v) {
        this.angle = v;
      },
    },
  },
  methods: {
    mouseMoveAnimation(e) {
      const x = e.clientX;
      const y = e.clientY;
      const sum = (x + y) / 100 - 15;
      this.defaultNavAngle = sum;
    },
  },
};
</script>

<style lang="scss">
.page_main {
  height: 100%;
  .page {
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    &__list {
      perspective: 1000px;
      transform-style: preserve-3d;
      list-style: none;
    }
    &__list-item {
      &:not(:first-of-type) {
        margin-top: 30px;
      }
    }
    &__link {
      text-decoration: none;
      font-size: 50px;
    }
  }
}
</style>
