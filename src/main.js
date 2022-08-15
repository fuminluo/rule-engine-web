import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'

import elementRule from './components/elementRule.vue'


const app = createApp(App);

// 将axios导入为全局配置，通过this.$http进行使用
app.config.globalProperties.$http = axios

app.use(router)
app.use(ElementPlus)
app.mount('#app')

app.component("elementRule", elementRule);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}