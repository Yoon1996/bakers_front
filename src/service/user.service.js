import axios from "axios";
import {env} from "../evnironment/environment"

const baseUrl = `${env.hosturl}/users`

export const nicknameCheck = (nickname) => {
    return axios.get(`${baseUrl}/nickname-check?nickname=${nickname}`)
}

export const signUp = (params) => {
    return axios.post(`${baseUrl}/sign-up`, params)
}