// نقطة الدخول - Memorix Frontend
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// إعادة تطبيق Google Translate بعد كل navigation في الـ SPA
router.afterEach(() => {
  const lang = localStorage.getItem('morix_lang') || 'ar'
  if (lang !== 'ar' && window.__morixTranslate) {
    setTimeout(() => window.__morixTranslate(lang), 350)
    setTimeout(() => window.__morixTranslate(lang), 900)
  }
})

app.mount('#app')
