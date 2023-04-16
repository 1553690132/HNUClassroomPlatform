import * as VueRouter from 'vue-router'
import { createPinia } from 'pinia'
import api from './api/index';
import 'vant/es/notify/style'
import 'vant/es/toast/style'
import 'vant/es/dialog/style';

export default {
    install: (app, options) => {
        app.use(VueRouter)
        app.use(createPinia())
        app.config.globalProperties.$api = api
    }
}