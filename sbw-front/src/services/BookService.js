import { API } from "./APIConstants.js"

export const getAllBooks = async () => {
    return await fetch(API + "books").then(r => r.json())
}

export const getBook = async (id) => {
    return await fetch(API + "books/" + id).then(r => r.json())
}