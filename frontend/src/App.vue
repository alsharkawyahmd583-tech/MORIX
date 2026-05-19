<template>
  <div class="translate-global-wrapper">
    <TranslateButton />
  </div>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TranslateButton from './components/TranslateButton.vue'
</script>

<style>
.translate-global-wrapper {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 9999;
}
</style>
