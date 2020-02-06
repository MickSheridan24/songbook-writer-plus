import { API } from "./APIConstants.js"

function toClean(content) {
    return content.replace(/'/g, "''")
}



export const getSong = async (id) => {
    return await fetch(API + "songs/" + id).then(r => r.json())
}

export const updateSong = async (out, id) => {
    const body = JSON.stringify(out)
    const send = toClean(body)
    await fetch(API + "songs/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: send
    }).then(r => r.json());
}