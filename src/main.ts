import { createApp } from 'vue'
import App from './App.vue'

console.log(import.meta) // 123
console.log(import.meta.env.VITE_HI) // 123
// @ts-ignore
createApp(App).mount('#app')
