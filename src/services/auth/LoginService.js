import { APP_NAME, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from '../../config/app'

class LoginService {
    API
    tokenName

    constructor(API){
        this.API = API
        this.tokenName = APP_NAME + '-token'
    }

    login(data){
        let params = {
            'grant_type':GRANT_TYPE,
            'client_id':CLIENT_ID,
            'client_secret':CLIENT_SECRET,
            'username':data.email,
            'password':data.password
        }

        return this.API.post('/oauth/token',params)        
    }

    logout(){
        this.removeCredentials()
        return
    }

    storeCredentials(data){
        this.API.defaults.headers['Authorization'] = `Bearer ${data.access_token}`
        localStorage.setItem(this.tokenName, JSON.stringify(data))
    }

    removeCredentials(){
        this.API.defaults.headers['Authorization'] = ``
        localStorage.removeItem(this.tokenName)
        return
    }
}

export default LoginService