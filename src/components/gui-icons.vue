<template>
  <i class="fa-solid" :class="[
      brand ? 'fab' : 'fas',
      icon
    ]" :style="{
      'color' : color
    }"></i>
</template>

<script lang="ts" setup>
import '@/assets/fontawesome/css/all.min.css';
defineProps(
  {
    icon: { type: String },
    brand: { type: Boolean, default: false },
    color: { type: String, default: '#000'}
  }
)
</script>