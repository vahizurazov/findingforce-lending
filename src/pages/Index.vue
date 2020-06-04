<template>
  <Layout>
    <nav>
      <ul>
        <li v-for="element in $static.metadata.menu" :key="element.name">
          <g-link :to="element.link">{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">Welcome to Skeleventy!</h1>
      <div class="content">
        <p>
          A
          <a href="https://www.gridsome.org">Gridsome</a> starter built with
          <a href="https://tailwindcss.com">TailwindCSS</a>.
        </p>
        <h2 class="text-3xl">Features</h2>
        <ul class="mb-12 list-disc pl-4">
          <li>Build sites faster with the power of Gridsome, TailwindCSS and SCSS</li>
          <li>Image lazyloading via gridsome builtin functionality</li>
          <li>A simple blog with categories, tags and featured images</li>
        </ul>
        <h2 class="text-3xl">Credits</h2>
        <p>
          This template was built for
          <a href="https://www.11ty.dev/docs/" target="_blank">Eleventy</a> by
          <a href="https://github.com/josephdyer" target="_blank">Joseph Dyer</a>.
        </p>
        <div>
          <icon :icon="['far', 'clock']"></icon>
          <icon :icon="['fas', 'info-circle']"></icon>
          <icon :icon="['custom', 'info']"></icon>
          <span class="icon icon is-large has-text-info">
            <icon class="fas fa-2x" :icon="['custom', 'info']"></icon>
          </span>
          <div class="field">
            <input
              id="switchRoundedInfo"
              type="checkbox"
              name="switchRoundedInfo"
              class="switch is-rounded is-info"
              checked="checked"
            />
            <label for="switchRoundedInfo">Switch rounded info</label>
          </div>
          <div class="field">
            <input
              class="is-checkradio is-info"
              id="exampleCheckboxInfo"
              type="checkbox"
              name="exampleCheckboxInfo"
              checked="checked"
            />
            <label for="exampleCheckboxInfo">Checkbox - info</label>
          </div>
        </div>
        <g-image src="@/assets/images/first_pict.svg"></g-image>
      </div>
      <ul>
        <li v-for="element in $static.metadata.social" :key="element.link">
          <a :href="element.link" :aria-label="element.icon" target="_blank">
            <svg fill="currentColor" role="img" aria-hidden="true" width="18" height="18">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="socialIcon(element)" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    meta: [{ name: 'resource-type', content: 'Home' }]
  },
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`;
    }
  }
};
</script>

<static-query>
  query {
    metadata {
      siteName
      menu {
        name
        link
      }
      social {
        icon
        link
      }
    }
  }
</static-query>

<style lang="scss" scoped>
</style>
