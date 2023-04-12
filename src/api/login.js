import request from '../utils/request'

const login = {
    async loginProcess(data) {
        const { data: res } = await request.post('api/auth/login', data)
        return res
    },
}

export default login