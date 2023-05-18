import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/storage/index'
import VueKonva from 'vue-konva'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueKonva)
app.mount('#app')
