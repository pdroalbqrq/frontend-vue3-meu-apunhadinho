import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import perfectScrollbar from './plugins/perfect-scrollbar';
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(perfectScrollbar)
  .use(vuetify)
  .mount('#app')
