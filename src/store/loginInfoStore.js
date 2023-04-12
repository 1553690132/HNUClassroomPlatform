import { defineStore } from 'pinia'
import api from '../api'

export const loginInfoStore = defineStore('loginInfoStore', {
    state: () => {
        return {
            username: '未登录',
        }
    },
    actions: {
        async getLoginInfos(data) {
            const res = await api.login.loginProcess(data)
            if (res.hasOwnProperty('data')) {
                localStorage.setItem('token', res.data.token)
            }
        }
    }
})