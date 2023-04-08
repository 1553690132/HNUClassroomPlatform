import * as VueRouter from 'vue-router'
import { createPinia } from 'pinia'
import api from './api/index';

export default {
    install: (app, options) => {
        app.use(VueRouter)
        app.use(createPinia())
        app.config.globalProperties.$api = api
    }
}