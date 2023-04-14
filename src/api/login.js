import request from '../utils/request'

const login = {
    async loginProcess(data) {
        const { data: res } = await request.post('api/auth/login', data)
        return res
    },
    async getUserInfo() {
        const { data: res } = await request.get('api/auth/userInfo')
        return res.data
    }
}

export default login