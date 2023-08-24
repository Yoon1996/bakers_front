import axios from "axios";
import {env} from "../evnironment/environment"

const baseUrl = `${env.hosturl}/users`

export const nicknameCheck = (nickname) => {
    return axios.get(`${baseUrl}/nickname-check?nickname=${nickname}`)
}
export const tokenVerify = () => {
    return axios.get(`${baseUrl}/token-verify`)
}

export const signUp = (params) => {
    return axios.post(`${baseUrl}/sign-up`, params)

}

export const loginCheck = (params) => {
    return axios.post(`${baseUrl}/login`, params)
}

export const myInfo = () => {
    return axios.get(`${baseUrl}/info`)
}

export const logout = () => {
    return axios.get(`${baseUrl}/logout`)
}