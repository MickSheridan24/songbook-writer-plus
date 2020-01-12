import Song from "../Songs/model";
import { Chord } from "../../types/modelTypes";


const prototypes = {
    Song: new Song({
        id: 0,
        title: "",
        userId: 0,
        artist: "",
        text: ""
    }),

    Chord: new Chord({

    })
}

export default prototypes