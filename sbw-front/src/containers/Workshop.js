import React from 'react'
import SongPad from "../components/Workshop/SongPad"


class Workshop extends React.Component {
    render() {
        return (
            <div className="workshop">
                <SongPad id={this.props.match.params.id}></SongPad>
            </div>
        )
    }
}

export default Workshop
