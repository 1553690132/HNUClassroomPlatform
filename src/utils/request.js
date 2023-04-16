import axios from "axios";
import { showToast } from 'vant'

axios.defaults.timeout = 300000000
// axios.defaults.baseURL = "http://172.16.2.2:12350/"
axios.defaults.baseURL = "http://localhost:12350/"
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
    config.headers['Authorization'] = localStorage.getItem('token')
    return config
}, error => {
    console.log("请求异常", JSON.stringify(error))
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    // 登录失败
    if (error.response.status === 403) {
        sessionStorage.setItem('errorType', error.response.data.msg)
        return error.response
    }
    // token错误
    if (error.response.status === 401) {
        showToast('登录过期，请重新登录!')
        location.href = '/#/login'
        localStorage.removeItem('token')
        return error.response
    }
    // 请求多次
    if (error.response.status === 429) {
        showToast('请勿多次提交，服务超时！')
        return error.response
    }
    console.log("响应出错", JSON.stringify(error))
    return Promise.reject(error)
})

const request = axios
export default request


