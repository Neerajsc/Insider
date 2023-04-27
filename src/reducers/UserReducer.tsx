import {USERDATA,PASSWORD} from '../actions/UserAction'

const initialState = {
    userName:'',
    password:''
}

const userReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case USERDATA:
            return {
                ...state,
                userName: action.payload.userName,
                password: action.payload.password
            }
        
        default:
            return {
                ...state
            }
    }
}

export default userReducer