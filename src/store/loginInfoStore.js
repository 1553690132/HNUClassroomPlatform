import { defineStore } from 'pinia'
import { userInfoStore } from './userInfoStore'
import api from '../api'

export const loginInfoStore = defineStore('loginInfoStore', {
    actions: {
        async getLoginInfos(data) {
            try {
                const res = await api.login.loginProcess(data)
                if (res.hasOwnProperty('data')) {
                    const userStore = userInfoStore()
                    localStorage.setItem('token', res.data.token)
                    const { userInfo } = await api.login.getUserInfo()
                    userStore.userInfo = { ...userInfo }
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }
})