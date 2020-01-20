import React from "react"
import Cursor from "./Cursor"
import SongText from "./SongText"
import "./songpad.css"

class SongPad extends React.Component {


    render() {
        return (
            <div className="songpad">
                <SongText /><Cursor />
            </div>
        )
    }

}

export default SongPad