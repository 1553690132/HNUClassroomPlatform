import { defineStore } from 'pinia'
import api from '../api'

export const userInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            userInfo: {},
            type: ''
        }
    },

    actions: {
        async getUserInfos() {
            const { userInfo, type } = await api.login.getUserInfo()
            this.userInfo = { ...userInfo }
            this.type = type
        }
    }
})