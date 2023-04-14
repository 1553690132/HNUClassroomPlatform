import { defineStore } from 'pinia'
import api from '../api'

export const userInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            userInfo: {}
        }
    },

    actions: {
        async getUserInfos() {
            const { userInfo } = await api.login.getUserInfo()
            this.userInfo = { ...userInfo }
        }
    }
})