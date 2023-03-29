<template>
  <div class="home-view">
    <div class="home-view__slider">
      <home-slider />
    </div>
    <div class="home-view__section">
      <div class="home-view__section-title">Наши услуги</div>
      <div class="home-view__section-content">
        <services-list :services="getPartialServices" />
      </div>
      <div class="home-view__section-append">
        <router-link to="/services" class="ui-button ui-button--primary"
          >Все услуги</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HomeSlider from "../components/HomeSlider";
import ServicesList from "../components/ServicesList";

export default {
  name: "HomeView",

  components: {
    HomeSlider,
    ServicesList,
  },

  computed: {
    ...mapGetters(["getPartialServices"]),
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.home-view {
  &__section {
    padding: 24px;

    @media (min-width: $breakpoint-lg) {
      padding: 24px 80px;
    }

    &-title {
      font-size: 24px;
      line-height: 30px;
      font-weight: 600;
      color: $color-gray-900;
      margin-bottom: 16px;

      @media (min-width: $breakpoint-sm) {
        font-size: 28px;
        line-height: 34px;
        margin-bottom: 20px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 32px;
      }
    }

    &-append {
      display: flex;
      justify-content: center;
      padding: 24px 0;
    }
  }
}
</style>
