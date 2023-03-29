<template>
  <div class="services-item-view">
    <div class="services-item-view__title">
      <!-- {{ service.title }} -->
      Get data from API
    </div>
    <div class="services-item-view__content">
      <!-- <img :src="service.cover" /> -->
      Get data from API
    </div>
  </div>
</template>

<script>
export default {
  name: "services-item-view",

  // props: {
  //   service: {
  //     type: Object,
  //     required: true,
  //   },
  // },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.services-item-view {
  padding: 24px 80px;

  &__title {
    font-size: 40px;
    line-height: 56px;
    font-weight: 600;
    color: $color-gray-900;
    margin-bottom: 32px;
  }
}
</style>
