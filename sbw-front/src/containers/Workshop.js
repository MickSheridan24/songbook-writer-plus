import React from 'react'
import SongText from '../components/SongText'


class Workshop extends React.Component {
    render() {
        return (
            <div>
                Workshop
                <SongText id={this.props.match.params.id}></SongText>
            </div>
        )
    }
}

export default Workshop
