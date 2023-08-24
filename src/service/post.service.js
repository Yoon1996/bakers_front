import axios from "axios";
import {env} from "../evnironment/environment"


const baseUrl = `${env.hosturl}/post`

export const getPost = () => {
    return axios.get(`${baseUrl}`)
}