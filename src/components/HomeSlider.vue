<template>
  <swiper
    class="home-slider"
    virtual
    :modules="modules"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <router-link to="/">
        <img :src="`${slide.cover}`" :alt="`slide-${index + 1}`" />
        <div class="home-slider__overlay" v-html="slide.title" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Virtual, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";

import { mapState } from "vuex";

export default {
  name: "home-slider",

  components: {
    Swiper,
    SwiperSlide,
  },

  computed: {
    ...mapState(["slides"]),
  },

  setup() {
    return {
      modules: [Virtual, Pagination],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.home-slider {
  &__overlay {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: #000;
    padding: 0 24px;
    max-width: 795px;

    span {
      color: $color-primary;
    }

    @media (min-width: $breakpoint-sm) {
      font-size: 48px;
      line-height: 60px;
      padding: 0 48px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 64px;
      line-height: 88px;
      padding: 0 72px 0 48px;
    }
  }

  .swiper-pagination {
    position: static;
    padding: 24px 0;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 9px;
    width: 10px;
    height: 10px;

    &-active {
      position: relative;
      background-color: $color-primary;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border: 1px solid $color-primary;
        border-radius: 50%;
      }
    }
  }
}
</style>
