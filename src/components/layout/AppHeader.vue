<template>
  <header class="section-header" :class="[ classNameforSummaryPage() ? 'header-summary' : '']">
    <div class="wrap-logo">
      <router-link :to="{name: 'home'}" class="wrap-item">
        <img src="@/assets/images/FF_logo.svg" alt="Logo" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    classNameforSummaryPage() {
      return this.$route.name === 'summary';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/site/_variables';
.section-header {
  padding: 11px 0;
  position: relative;
  &.header-summary {
    .wrap-logo {
      margin: 0 37px;
    }
  }
  .wrap-logo {
    width: 91px;
    margin: 0 auto;
  }
}
</style>
