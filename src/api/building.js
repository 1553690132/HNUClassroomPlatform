import request from "../utils/request"

const building = {
    async getBuildingList() {
        const { data: res } = await request.get('front/building/list')
        return res
    },

    async searchBuildingInfo(keywords) {
        const { data: res } = await request.post('front/building/search', keywords)
        return res
    },

    async queryEmptyClassRoom(data) {
        const { data: res } = await request.post('front/class/empty', data)
        return res
    },

    async queryClassRoomInfo(params) {
        const { data: res } = await request.get('front/class', { params })
        return res
    }
}

export default building