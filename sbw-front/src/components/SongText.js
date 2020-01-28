import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState } from 'draft-js'
import { updateSong, fetchSong, saveSong } from "../redux/actions/songActions.js"



class SongText extends React.Component {
    constructor() {
        super()
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.editor = React.createRef()
    }

    async componentDidMount() {
        await this.props.fetchSong(this.props.id)
        this.editor.current.focus()
    }

    handleChange = (editorState) => {
        console.log(editorState)
        this.setState({ editorState })
        this.props.updateSong(editorState)
    }

    handleClick = (e) => {
        this.props.saveSong(this.props.song, this.props.editor)
    }

    render() {
        return <React.Fragment>
            <div className="editor-wrap">
                <Editor ref={this.editor} editorState={this.props.editor} onChange={this.handleChange} />
            </div>
            <button onClick={this.handleClick}>SAVE</button>
        </React.Fragment>
    }
}


function mapStateToProps(state) {
    return {
        song: state.song,
        editor: state.editor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSong: (song) => dispatch(updateSong(song)),
        fetchSong: (id) => dispatch(fetchSong(id)),
        saveSong: (song, editor) => dispatch(saveSong(song, editor))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
