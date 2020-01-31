import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState } from 'draft-js'
import { updateSong, fetchSong, saveSong, saveTitle } from "../redux/actions/songActions.js"



class SongText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editTitle: false,
            tempTitle: this.props.song.title,
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
    handleDouble = (e) => {
        this.setState({ editTitle: true, tempTitle: this.props.song.title })
    }
    handleChangeTitle = (e) => {
        this.setState({ tempTitle: e.target.value })
    }
    saveTitle = (e) => {
        this.props.saveTitle(this.state.tempTitle, this.props.song.id)
        this.setState({ editTitle: false })
    }
    title = () => {
        if (!this.state.editTitle) {
            return <div className="title" onDoubleClick={this.handleDouble}>{this.props.song.title}</div>
        } else {
            return <input value={this.state.tempTitle} onBlur={this.saveTitle} onChange={this.handleChangeTitle}></input>
        }
    }

    render() {
        return <React.Fragment>
            {this.title()}
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
        saveSong: (song, editor) => dispatch(saveSong(song, editor)),
        saveTitle: (title) => dispatch(saveTitle(title))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
