<template>
  <header class="section-header" :class="[ classNameforSummaryPage() ? 'header-summary' : '']">
    <!-- <div class="wrap-logo">
      <router-link :to="{name: 'home'}" class="wrap-item">
        <img src="@/assets/images/FF_logo.svg" alt="Logo" />
      </router-link>
    </div>-->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="nav-logo">
            <router-link :to="{name: 'home'}">
              <img src="../../assets/images/FF_logo.svg" alt="Logo" />
            </router-link>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <nav>
              <ul class="navbar-center">
                <li
                  v-for="element in $static.metadata.menu"
                  :key="element.name"
                  class="navbar-item"
                >
                  <g-link :to="element.link">{{ element.name }}</g-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="wrap-start-btn">
            <div class="wrap-btn">
              <router-link
                to="introduction"
                class="button btn-large main-color is-outlined is-rounded"
              >Find my force</router-link>
            </div>
          </div>
        </div>
      </nav>
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
@import '@/assets/styles/site/_variables';
.section-header {
  // padding: 11px 0;
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

  .hero-head {
    .navbar {
      min-height: 5.625rem;
      background: white;
      .container {
        .nav-logo {
          width: 120px;
          margin: 12px;
          a {
            color: #fff;
          }
          .navbar-item {
            width: 100%;
            padding: 0;
            &:hover {
              color: #fff;
              background-color: #fff;
            }
            img {
              max-height: 100%;
            }
          }
        }
        .navbar-menu {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .wrap-start-btn {
        display: flex;
      }
      .navbar-center {
        text-align: center;
        display: flex;
        .navbar-item {
          font-family: $font-primary;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          a {
            color: $color-black;
            position: relative;
            &:focus {
              text-decoration: none;
            }
            &:hover {
              text-decoration: none;
              &::before {
                content: '';
                position: absolute;
                bottom: -12px;
                left: 0;
                right: 0;
                margin: auto;
                width: calc(100% - 20px);
                height: 3px;
                background-color: $color-dodger-blue;
              }
            }
          }
        }
      }
      .wrap-btn {
        display: flex;
        align-items: center;
      }
    }
  }
  .main-color-text {
    color: $color-dodger-blue;
  }
  .container {
    max-width: 1200px;
  }
}
</style>
