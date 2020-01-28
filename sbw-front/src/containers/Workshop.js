import React from 'react'
import SongText from '../components/SongText'
import { fetchSong } from "../redux/actions/songActions"

class Workshop extends React.Component {

    async componentDidMount() {
        const { id } = this.props.match.id
        await fetchSong(id)
    }
    render() {
        return (
            <SongText id={this.props.match.id}></SongText>
        )
    }
}

export default Workshop
