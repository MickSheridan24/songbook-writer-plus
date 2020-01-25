import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState } from 'draft-js'
import { updateSong, fetchSong, saveSong } from "../redux/actions/songActions.js"



class SongText extends React.Component {
    constructor() {
        super()
        this.editor = React.createRef()
    }
    state = {
        mounted: false,
        saving: false,
    }

    async componentDidMount() {

        await this.props.fetchSong(7);
        await this.setState({ mounted: true })
        this.editor.current.focus()

    }


    handleChange = (editorState) => {
        this.props.updateSong({ text: editorState, id: this.props.id, saving: this.props.saving })
    }

    handleClick = (e) => {
        this.props.saveSong({ text: this.props.song, id: this.props.id })
    }

    render() {
        return <React.Fragment>
            <div className="editor-wrap">
                {this.state.mounted ? <Editor ref={this.editor} editorState={this.props.song.text} onChange={this.handleChange} /> : null}
            </div>
            <button onClick={this.handleClick}>SAVE</button>
        </React.Fragment>
    }
}


function mapStateToProps(state) {
    return {
        song: state.song,
        id: state.song.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSong: (song) => dispatch(updateSong(song)),
        fetchSong: (id) => dispatch(fetchSong(id))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
