<template>
  <footer class="footer">
    <!-- <hr /> -->
    <div class="container wrap-bottom">
      <div class="wrap-copyright">
        <small>{{getYear()}} Powered by Sparkybit</small>
      </div>
      <div class="wrap-footer-logo">
        <a href="https://sparkybit.com/" target="_blank" rel="noopener">
          <img
            src="@/assets/images/logo-sparkybit.svg"
            alt="Logo Sparkybit"
            width="59"
            height="13.2"
          />
        </a>
      </div>
      <div class="wrap-footer-link">
        <a>Cookie Policy</a>
        <router-link to="privacy-policy">Privacy Policy</router-link>
        <router-link to="terms-conditions">Terms & Conditions</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/site/_variables';

.footer {
  background-color: rgba(117, 190, 218, 0);
  padding: 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: #e2e7ee;
    border: none;
    display: block;
    height: 1px;
    width: 100vw;
    margin: 1.5rem 0;
  }
  .wrap-bottom {
    display: flex;
    justify-content: center;
    .wrap-copyright {
      padding: 7.5px 80px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-right: 1px solid #e2e7ee;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-right: 1px solid #e2e7ee;
      }
    }
    .wrap-footer-logo {
      padding: 7.5px 17px 7.5px 21px;
      position: relative;
      display: flex;
      align-items: center;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-right: 1px solid #e2e7ee;
      }
    }
    .wrap-footer-link {
      padding: 7.5px 80px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-right: 1px solid #e2e7ee;
      }
    }
    a,
    small {
      font-family: $font-primary;
      font-style: normal;
      font-weight: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      color: #989898;
      text-decoration: none;
    }
    a {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: $color-dodger-blue;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer {
    .wrap-bottom {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
      .wrap-copyright,
      .wrap-footer-logo,
      .wrap-footer-link {
        padding: 15px 10px;
        &::before,
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
