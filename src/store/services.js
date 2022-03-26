
import API from '../services/api'
import LoginService from '../services/auth/LoginService'
import HomeService from '../services/home/HomeService'

export default {
    loginService: new LoginService(API),
    homeService: new HomeService(API)
}