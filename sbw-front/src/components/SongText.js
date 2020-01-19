import React from 'react'
import { connect } from 'react-redux'


class SongText extends React.Component {

    render() {
        return <div>ST{this.props.song.text}ST</div>
    }
}

function mapStateToProps(state) {
    return {
        song: state.song
    }
}

export default connect(mapStateToProps)(SongText)