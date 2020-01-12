import Song from "../Songs/model";
import { Chord } from "../../types/modelTypes";


const prototyper = ()

export default {
    Song: new Song({
        id: 0,
        title: "",
        userId: 0,
        artist: "",
        text: ""
    }),

    Chord: new Chord({
        id: 0,

    })
}

