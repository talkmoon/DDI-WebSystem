
import axios from "axios";
import {createApp, VueElement} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-xinqi.css'
import 'element-plus/dist/index.css'
import router from "@/router/index.js";
const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
