class HomeService {
    API
    
    constructor(API){
        this.API = API
    }

    me(){        
        return this.API.get('/users')        
    }
}

export default HomeService