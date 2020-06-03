<template>
  <div>
    <a class="visually-hidden" href="#main">Finding Force</a>

    <div class="wrapper">
      <AppHeader />

      <main class="container">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import AppFooter from './layout/AppFooter';
import AppHeader from './layout/AppHeader';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
