import { API_PATH } from "./APIConstants.js"

function toClean(content) {
    return content.replace(/'/g, "''")
}

export const createSong = async (body) => {
    return await fetch(API_PATH + "songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }).then(r => r.json())
}

export const getSong = async (id) => {
    return await fetch(API_PATH + "songs/" + id).then(r => r.json())
}

export const updateSong = async (out, id) => {
    const body = JSON.stringify(out)
    const send = toClean(body)
    await fetch(API_PATH + "songs/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: send
    }).then(r => r.json());
}