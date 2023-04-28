import {USERDATA,PASSWORD} from '../actions/UserAction'

const initialState = {
    userName:'',
    password:'',
    isAuthenticate: false
}

const userReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case USERDATA:
            return {
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
                isAuthenticate: true
            }
        
        default:
            return {
                ...state
            }
    }
}

export default userReducer