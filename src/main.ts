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
import GuiSliders from './components/gui-sliders.vue'
import GuiCard from './components/gui-card.vue'
import GuiIcon from './components/gui-icons.vue'
export { Test, GuiToggle, GuiSliders, GuiCard, GuiIcon }