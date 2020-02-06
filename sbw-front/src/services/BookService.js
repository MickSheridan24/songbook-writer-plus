import { API_PATH } from "./APIConstants.js"

export const getAllBooks = async () => {
    return await fetch(API_PATH + "books").then(r => r.json())
}

export const getBook = async (id) => {
    debugger
    return await fetch(API_PATH + "books/" + id).then(r => r.json())
}