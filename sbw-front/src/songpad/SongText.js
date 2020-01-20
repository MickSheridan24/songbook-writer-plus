import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import { type, keyUp, saveDelta } from "../redux/actions/songActions.js"



class SongText extends React.Component {
    constructor() {
        super()
        this.editor = React.createRef()
    }
    state = {
        mounted: false,
        saving: false,
        editorState: EditorState.createEmpty(),
    }

    componentDidMount() {
        this.setState({ mounted: true })
        this.editor.current.focus()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.editorState !== this.state.editorState && !this.state.saving) {
            this.setState({ saving: true }, async () => {
                await this.autoSave();
                this.setState({ saving: false })
            })
        }
    }

    async autoSave() {
        const content = this.state.editorState.getCurrentContent();
        console.log(convertToRaw(content))
    }

    handleChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        return <div className="editor-wrap">
            <Editor ref={this.editor} editorState={this.state.editorState} onChange={this.handleChange} />
        </div>
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
        keyUp: key => dispatch(keyUp(key)),
        saveDelta: d => dispatch(saveDelta(d))

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
