<template>
  <Carousel  :wrap-around="true">
    <Slide v-for="(image, index) in images" :key="index">
      <a v-if="hasLinks" :href="image.url">
        <img :src="image.image.url" :alt="image.image.alt" class="img-fluid" />
      </a>
      <img v-else :src="image.url" :alt="image.alt" class="img-fluid" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    images: {
      type: Array<any>,
      default: null,
    },
    hasLinks: {
      type: Boolean,
      default: false,
    },
    hasMovil: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
:deep() {
  .carousel {
    &__slide {
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    &__prev,
    &__next {
      box-sizing: content-box;
      width: 50px;
      height: 50px;
      font-size: 50px;
      color:#7e22ce
    }
    &__pagination-button {
      &::after {
        background-color: #400000;
      }
      &--active {
        &::after {
          background-color:#7e22ce;
        }
      }
    }
  }
}
</style>