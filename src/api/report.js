import request from "../utils/request";

const report = {
    async getReportType() {
        const { data: res } = await request.get('front/class/report/type')
        return res
    },

    async sendReport(data) {
        const { data: res } = await request.post('front/class/report/fault', data)
        return res
    },

    async uploadImg(data) {
        const formData = new FormData()
        formData.append('file', data)
        const { data: res } = await request.post('api/upload/image', formData, {
            'Content-type': 'multipart/form-data'
        })
        return res
    },

    async getReportList(params) {
        const { data: res } = await request.get('front/class/report/mine', { params })
        return res
    },

    async searchTypeName(id) {
        const { data: res } = await request.get(`front/class/report/type/${id}`)
        return res
    }
}

export default report