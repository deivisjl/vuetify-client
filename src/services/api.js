import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import { API_URL, APP_NAME } from '../config/app'

let tokenName = APP_NAME + '-token'
let token = JSON.parse(localStorage.getItem(tokenName))
token = token?.access_token

const API = axios.create({
    baseURL: API_URL,
    headers:{
        'Accept':'application/json',
        'Authorization':`Bearer ${ token || ''}`
    }
})

API.interceptors.response.use(
    res => {
        return res
    },
    err => {
        if(err.response.status === 401){
            store.dispatch('auth/LOGOUT')
            store.state.services.loginService.logout()
            router.push('/login')
            return
        }
        throw err
    }
)
export default API