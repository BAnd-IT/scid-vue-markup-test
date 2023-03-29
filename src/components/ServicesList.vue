<template>
  <div class="services-list">
    <div v-for="item in services" :key="item.id" class="services-list__item">
      <img
        class="services-list__item-cover"
        :src="item.cover"
        alt="item.title"
      />
      <router-link
        class="services-list__item-title"
        :to="{
          name: 'service',
          params: { id: item.id },
        }"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "services-list",

  props: {
    services: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 1 100%;
    padding: 24px;
    gap: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 20px;

    @media (min-width: $breakpoint-sm) {
      flex-basis: calc((100% - 24px) / 2);
    }

    @media (min-width: $breakpoint-lg) {
      flex-basis: calc((100% - 2 * 24px) / 3);
    }

    &-cover {
      width: 100%;
      height: auto;
    }

    &-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-decoration: none;
      transition: all 0.25s ease-in-out;

      &,
      &:visited {
        color: black;
      }

      &:hover {
        color: $color-primary;
      }

      @media (min-width: $breakpoint-sm) {
        font-size: 16px;
        line-height: 22px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
}
</style>
