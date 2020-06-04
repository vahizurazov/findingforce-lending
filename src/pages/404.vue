<template>
  <div class="not-route">
    <h1>404 not found</h1>
  </div>
</template>
<script>
export default {
  name: 'NotFoundPage',
  metaInfo: {
    title: '404'
  }
};
</script>
<style lang="scss" scoped>
.not-route {
  display: flex;
  justify-content: center;
  margin: 100px 400px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 1em;
  }
}
</style>
