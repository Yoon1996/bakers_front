import {configureStore, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { getAccessToken, setAccessToken } from '../util/localstorage.util'

const userInitialState = {

}

export const {name, actions, reducer: userReducer} = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        loginUser: (currentUserInfo, action) =>{
            if(action?.payload?.accessToken){
                setAccessToken(action?.payload?.accessToken)
                const accessToken = getAccessToken()
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            }
            console.log('actionpayload', action.payload)
        return {...currentUserInfo, ...action.payload}
    },
        updateUser: (currentUserInfo, action) => ({...currentUserInfo, ...action.payload})
    }
})



export const {updateUser, loginUser} = actions