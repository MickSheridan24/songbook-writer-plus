import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import { type, keyUp, saveDelta, updateSong } from "../redux/actions/songActions.js"



class SongText extends React.Component {
    constructor() {
        super()
        this.editor = React.createRef()
    }
    state = {
        mounted: false,
        saving: false,
    }

    componentDidMount() {
        this.setState({ mounted: true })
        this.editor.current.focus()
    }


    handleChange = (editorState) => {
        this.props.updateSong({ text: editorState, id: this.props.id, saving: this.props.saving })
    }

    render() {
        return <div className="editor-wrap">
            <Editor ref={this.editor} editorState={this.props.song} onChange={this.handleChange} />
        </div>
    }
}


function mapStateToProps(state) {
    return {
        song: state.song.editorState,
        saving: state.song.saving,
        id: state.song.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSong: (song) => dispatch(updateSong(song))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
