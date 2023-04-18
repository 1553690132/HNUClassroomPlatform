import request from '../utils/request'
import encode from '../utils/encode'

const login = {
    async loginProcess(data) {
        console.log(encodeURIComponent(encode.encodeRSA(data.password, null)))
        const { data: res } = await request.post('api/auth/login', data)
        return res
    },
    async getUserInfo() {
        const { data: res } = await request.get('api/auth/userInfo')
        return res.data
    },
    async changePassword(data) {
        const { data: res } = await request.put('api/auth/changePassword', data)
        return res
    }
}

export default login