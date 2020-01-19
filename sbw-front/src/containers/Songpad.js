import React from "react"
import Cursor from "../components/Cursor"
import SongText from "../components/SongText"

class SongPad extends React.Component {


    render() {
        return (
            <div className="songpad">
                <Cursor></Cursor>
                <SongText></SongText>
            </div>
        )
    }

}

export default SongPad