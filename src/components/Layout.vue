<template>
  <div>
    <a class="visually-hidden" href="#main">Finding Force</a>

    <div class="container wrap-container root-content">
      <AppHeader />

      <main>
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
