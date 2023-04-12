import axios from "axios";

axios.defaults.timeout = 300000000
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
    if (error.response.status === 403) {
        return error.response
    }
    if (error.response.status === 401) {
        console.log('登录过期,请重新登录')
        return error.response
    }
    console.log("响应出错", JSON.stringify(error))
    return Promise.reject(error)
})

const request = axios
export default request


