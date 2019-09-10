<template>
  <div class="page page_main">
    <nav class="page__nav">
      <ul class="page__list">
        <li class="page__list-item">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link to="/team">
            Team
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link to="/history">
            History
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link to="/blog">
            Blog
          </router-link>
        </li>
        <li class="page__list-item">
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
      transform: translateX(20vw);
      list-style: none;
    }
    &__list-item {
      &:not(:first-of-type) {
        margin-top: 30px;
      }
    }
  }
}
</style>
