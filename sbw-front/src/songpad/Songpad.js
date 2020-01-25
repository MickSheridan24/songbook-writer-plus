import React from "react"
import SongText from "./SongText"
import "./Draft.css"


class SongPad extends React.Component {


    render() {
        return (
            <div className="songpad">
                <SongText />
            </div>
        )
    }

}

export default SongPad