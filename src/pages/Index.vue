<template>
  <Layout>
    <div class="hero head-section">
      <div class="hero-body" id="nav_0">
        <div class="container">
          <div class="columns wrap-columns">
            <div class="column is-5 left-column">
              <h1 class="wrap-text">
                Are you new to
                <span class="main-color-text">Salesforce?</span>
              </h1>
              <h2 class="wrap-subtitle">Not sure you are getting best of it?</h2>
              <div class="wrap-block">
                <p>You will find all answers here! FindingForce gives you automated advisory and recommendation</p>
              </div>
              <div class="wrap-btn">
                <g-link
                  to="/introduction/"
                  class="button btn-large main-color-inversion is-rounded"
                >Find my force</g-link>
              </div>
            </div>
            <div class="column is-7 right-column">
              <div class="wrap-img">
                <g-image
                  class="saleforce-background"
                  src="@/assets/images/first_pict.svg"
                  alt="hero body img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="wrap-find-alternative section" id="nav_1">
      <div class="container">
        <h1>Maximize my Force</h1>
        <div class="columns col-info">
          <div class="wrap-alternative-section column is-3">
            <div class="wrap-alternative-img">
              <g-image
                src="@/assets/images/iconsToMaximizeForce/max-my-force1.svg"
                alt="Finding Force"
              />
            </div>
            <div class="wrap-block">
              <p>Understand products your company needs</p>
            </div>
          </div>
          <div class="wrap-alternative-section column is-3">
            <div class="wrap-alternative-img">
              <g-image
                src="@/assets/images/iconsToMaximizeForce/max-my-force2.svg"
                alt="Finding Force"
              />
            </div>
            <div class="wrap-block">
              <p>Optimise your existing SalesForce</p>
            </div>
          </div>
          <div class="wrap-alternative-section column is-3">
            <div class="wrap-alternative-img">
              <g-image
                src="@/assets/images/iconsToMaximizeForce/max-my-force3.svg"
                alt="Finding Force"
              />
            </div>
            <div class="wrap-block">
              <p>Get information about licenses and costs</p>
            </div>
          </div>
          <div class="wrap-alternative-section column is-3">
            <div class="wrap-alternative-img">
              <g-image
                src="@/assets/images/iconsToMaximizeForce/max-my-force4.svg"
                alt="Finding Force"
              />
            </div>
            <div class="wrap-block">
              <p>Find alternatives and options available for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="wrap-powerfull-section section" id="nav_2">
      <div class="container">
        <div class="columns wrap-powerfull-col">
          <div class="column left-column is-4">
            <h1>Powerfull automated advisory</h1>
            <p>
              FindingForce runs solid technology solution to bring you fully autorated adaptive and meaningfull advisory
              at zero cost
            </p>
            <div class="wrap-btn">
              <g-link
                to="/introduction/"
                class="button btn-large main-color is-rounded"
              >Find my force</g-link>
            </div>
          </div>
          <div class="column right-column is-8">
            <div class="wrap-img">
              <g-image src="@/assets/images/second_pict.svg" alt="hero body img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="wrap-good-company section">
      <div class="container">
        <div class="wrap-subtitle">
          <h1>You are in a good company</h1>
          <p>FindingForce is a product developed by SalesForce Consulting industry leader</p>
          <div class="wrap-btn">
            <a class="button btn-large main-color is-rounded">Read more about us</a>
          </div>
        </div>
      </div>
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
@import '@/assets/styles/site/_variables';

.head-section {
  .hero-body {
    padding-top: 125px;
    padding-bottom: 125px;
    .wrap-columns {
      .left-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 93px;
        .wrap-text {
          font-family: $font-primary;
          font-style: normal;
          font-weight: 800;
          font-size: 48px;
          line-height: 68px;
          text-transform: uppercase;
          margin-bottom: 20px;
          .main-color-text {
            color: $color-dodger-blue;
          }
        }
        .wrap-subtitle {
          font-family: $font-primary;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 30px;
        }
        .wrap-block {
          width: 68%;
          p {
            margin-bottom: 50px;
          }
        }
      }
    }
  }
}
.wrap-find-alternative {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 100vw;
    height: 100%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: $color-alabaster;
    border: none;
    display: block;
  }
  .container {
    h1 {
      line-height: 43px;
      padding: 30px 0 100px;
      text-align: center;
    }
    .col-info {
      padding-bottom: 60px;
      margin: 0 auto;
      .wrap-alternative-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
        margin: auto;
        .wrap-alternative-img {
          margin-bottom: 30px;
          justify-content: center;
          img {
            height: 75px;
          }
        }
        .wrap-block {
          padding: 0 75px;
          height: 80px;
          p {
            line-height: 26px;
            text-align: left;
          }
        }
      }
    }
  }
}
.wrap-powerfull-section {
  .wrap-powerfull-col {
    padding: 65px 0 110px;
    .left-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 77px;
      h1 {
        line-height: 48px;
        margin-bottom: 30px;
      }
      p {
        line-height: 26px;
        margin-bottom: 40px;
      }
    }
    .right-column {
      text-align: right;
    }
  }
}
.wrap-good-company {
  .wrap-subtitle {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;
    h1 {
      line-height: 54px;
      margin-bottom: 25px;
    }
    p {
      margin-bottom: 50px;
    }
    .wrap-btn {
      display: flex;
      align-items: center;
    }
  }
}
.wrap-text {
  font-family: $font-primary;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 68px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.wrap-subtitle {
  font-family: $font-primary;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 30px;
}
.main-color-text {
  color: $color-dodger-blue;
}
.container {
  max-width: 1200px;
}
@media screen and (max-width: $breakpoint-lg-max) {
  .wrap-alternative-section {
    .wrap-block {
      padding: 0 60px !important;
    }
  }
}
@media screen and (max-width: 1280px) {
  .wrap-alternative-section {
    .wrap-block {
      padding: 0 38px !important;
    }
  }
}
@media screen and (max-width: 1024px) {
  .main-wrap {
    .head-section {
      .hero-head {
        .navbar {
          .wrap-start-btn {
            justify-content: center;
            padding: 60px 0px 0px;
          }
        }
      }
    }
  }
  .wrap-alternative-section {
    .wrap-block {
      padding: 0 32px !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .main-wrap {
    .hero-body {
      .wrap-columns.columns {
        .left-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-right: 0;
          .wrap-text {
            font-size: 36px;
            line-height: 43px;
          }
        }
      }
    }

    .wrap-find-alternative {
      .container {
        text-align: center;
        .col-info {
          display: flex;
          flex-wrap: wrap;
          .wrap-alternative-section {
            .wrap-block {
              width: 100%;
            }
          }
        }
      }
    }
    .wrap-powerfull-section {
      .wrap-powerfull-col {
        flex-direction: row;
        padding: 0;
        .left-column {
          align-items: center;
          padding-right: 0;
        }
      }
    }
  }
  .main-wrap {
    .container {
      .columns {
        flex-wrap: wrap !important;
        flex-direction: column;
        height: 840px;
      }
    }
  }
}
</style>
