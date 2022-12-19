import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'
// 通用字体
import 'vfonts/Lato.css'
import '@/assets/common.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
