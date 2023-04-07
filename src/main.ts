import { createApp } from 'vue'
import App from '@/App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

import VueI18n from './language'


createApp(App)
  .use(VueI18n)
  .mount('#app')
