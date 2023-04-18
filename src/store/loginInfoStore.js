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
                    const { userInfo, type } = await api.login.getUserInfo()
                    if (res.data.isFirstLogin) {
                        userStore.userInfo = { ...userInfo, isFirstLogin: res.data.isFirstLogin }
                        sessionStorage.setItem('isFirstLogin', res.data.isFirstLogin)
                    }
                    else userStore.userInfo = { ...userInfo }
                    userStore.type = type
                    sessionStorage.setItem('studentId', userInfo.studentId)
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }
})