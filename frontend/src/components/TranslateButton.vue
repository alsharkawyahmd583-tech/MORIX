<template>
  <div class="custom-translate-container">
    <button @click="toggle" class="lang-button">اللغة / Language</button>
    <div :class="['lang-dropdown', 'notranslate', { show: isOpen }]">
      <a href="javascript:void(0)" @click="select('ar')">العربية</a>
      <a href="javascript:void(0)" @click="select('en')">English</a>
      <a href="javascript:void(0)" @click="select('zh')">中文</a>
      <a href="javascript:void(0)" @click="select('fr')">Français</a>
      <a href="javascript:void(0)" @click="select('de')">Deutsch</a>
      <a href="javascript:void(0)" @click="select('es')">Español</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const { setLang } = useI18n()
const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function select(code) {
  setLang(code)
  isOpen.value = false
}

function handleOutsideClick(e) {
  if (!e.target.closest('.custom-translate-container')) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleOutsideClick))
onUnmounted(() => window.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.custom-translate-container {
    position: relative;
    display: inline-block;
    font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
    direction: rtl;
}

.lang-button {
    background-color: #ffffff;
    color: #4a4a4a;
    padding: 8px 20px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    transition: all 0.2s ease-in-out;
    outline: none;
}

.lang-button:hover {
    background-color: #fcfcfc;
    border-color: #bbbbbb;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.lang-dropdown {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 150px;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.08);
    z-index: 1000;
    border-radius: 4px;
    margin-top: 5px;
    right: 0;
    border: 1px solid #eeeeee;
    overflow: hidden;
    animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}

.lang-dropdown a {
    color: #555555;
    padding: 10px 15px;
    text-decoration: none;
    display: block;
    text-align: right;
    font-size: 13px;
    transition: background 0.2s;
}

.lang-dropdown a:hover {
    background-color: #f5f7ff;
    color: #2c3e50;
}

.show { display: block !important; }
</style>
