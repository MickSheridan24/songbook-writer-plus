import React from 'react'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill';
import { type, keyUp } from "../redux/actions/songActions.js"
import 'react-quill/dist/quill.snow.css';


class SongText extends React.Component {

    render() {
        return <ReactQuill value={this.props.song.text}
            onChange={(key) => this.type(key)} />
    }
}


function mapStateToProps(state) {
    return {
        song: state.song
    }
}

function mapDispatchToProps(dispatch) {
    return {
        type: key => dispatch(type(key)),
        keyUp: key => dispatch(keyUp(key))

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
