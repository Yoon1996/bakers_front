import axios from "axios";
import {env} from "../evnironment/environment"

const baseUrl = `${env.hosturl}/recipe`

//카테고리 드롭다운 api
export const categoryDrop = () => {
    return axios.get(`${baseUrl}/getCategory`)
}

//레시피 등록 api
export const create = (params) => {
    return axios.post(`${baseUrl}/create_recipe`, params)
}

//레시피 가져오기
export const showRecipe = () => {
    return axios.get(`${baseUrl}/show_recipe`)
}