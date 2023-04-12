import { defineStore } from 'pinia'

export const buildingInfoStore = defineStore('buildingInfoStore', {
    state: () => {
        return {
            nowBuildingInfo: {}
        }
    },

    actions: {
        chooseBuilding(infos) {
            this.nowBuildingInfo = { ...infos }
        }
    }
})