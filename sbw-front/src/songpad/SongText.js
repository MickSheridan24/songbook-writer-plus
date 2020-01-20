import React from 'react'
import { connect } from 'react-redux'


class SongText extends React.Component {

    render() {
        return <span className="line">{this.props.song.text}</span>
    }
}

function mapStateToProps(state) {
    return {
        song: state.song
    }
}

export default connect(mapStateToProps)(SongText)