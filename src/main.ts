import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')

import Test from './components/gui-button.vue'
import GuiToggle from './components/gui-toggle.vue'
export { Test, GuiToggle }