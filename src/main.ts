import {createApp} from 'vue'
import App from './app.vue'
import router from '@/router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import {createPinia} from 'pinia'
import '@/config/axios-config.ts'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.mount('#app')