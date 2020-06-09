<template>
  <section class="external-app">
    <iframe
      src="https://findingforce-test.westeurope.cloudapp.azure.com/introduction"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
  metaInfo: {
    title: 'Introduction',
    meta: [{ name: 'resource-type', content: 'Finding Force Application' }]
  }
};
</script>

<style lang="scss" scoped>
iframe {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
