import { API } from "./APIConstants.js"

export const getSong = async (id) => {
    return await fetch(API + "songs/" + id).then(r => r.json())
}