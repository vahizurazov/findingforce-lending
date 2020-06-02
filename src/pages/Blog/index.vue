<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script>
export default {
  metaInfo: {
    title: 'Blog',
    array: [3, 4, 5],
    object: { sss: true }
  }
};
</script>

<page-query>
  query {
    allBlog {
      edges {
        node {
          title
          path
          image(width: 780)
          humanTime: created(format: "Do MMMM YYYY")
          datetime: created(format: "ddd MMM DD YYYY hh:mm:ss zZ")
          author {
            name
          }
          category {
            title
          }
        }
      }
    }
  }
</page-query>
