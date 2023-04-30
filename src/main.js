import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import sebzelerComponent from './components/sebzelerComponent.vue'
import headerComponent from './components/headerComponent.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('sebzelerComponent', sebzelerComponent)
app.component('headerComponent', headerComponent)

