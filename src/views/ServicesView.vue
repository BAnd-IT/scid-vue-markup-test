<template>
  <div class="services-view">
    <div class="services-view__title">Наши услуги</div>
    <div class="services-view__content">
      <services-list :services="services" />
    </div>
  </div>
</template>

<script>
import ServicesList from "../components/ServicesList";
import { mapGetters } from "vuex";

export default {
  name: "services-view",

  components: {
    ServicesList,
  },

  computed: {
    ...mapGetters({
      services: "getAllServices",
    }),
  },

  beforeRouteEnter(from, to, next) {
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.services-view {
  padding: 24px;

  @media (min-width: $breakpoint-lg) {
    padding: 24px 80px;
  }

  &__title {
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
}
</style>
