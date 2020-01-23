import { tIndex } from "../../types/modelTypes";

export function validateSongParams(params: tIndex) {
    if (typeof params.text === "object") {
        params.text = JSON.stringify(params.text)
    }
    return params
}