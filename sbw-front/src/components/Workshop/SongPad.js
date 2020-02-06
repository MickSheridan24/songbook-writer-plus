import React from 'react'
import { connect } from 'react-redux'
import { Editor, ContentState, EditorState, Modifier, RichUtils, getDefaultKeyBinding, KeyBindingUtil, ContentBlock, genKey } from 'draft-js'
const { hasCommandModifier } = KeyBindingUtil;
import * as Actions from "./WorkshopActions"
import "./workshopStyle.css"


class SongText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editTitle: false,
            tempTitle: this.props.song.title,
        }
        this.editor = React.createRef()
    }

    async componentDidMount() {
        await this.props.fetchSong(this.props.id)
        this.editor.current.focus()
    }

    insertLine(selectionState, contentState) {
        debugger
        const key = selectionState.getAnchorKey()
        const blockMap = contentState.getBlockMap().map(b => {
            if (b.key == key) {
                return new ContentBlock({
                    key: key,
                    text: b.text,
                    type: 'expand',
                });
            }
            return b;
        });
        debugger
        return contentState.merge({
            blockMap: blockMap
        })
    }
    handlePastedText = (text) => {
        const editorState = this.props.editor;
        const pastedBlocks = ContentState.createFromText(text).blockMap.map(b => new ContentBlock({
            key: b.key,
            text: b.text,
            type: 'verse'
        }));
        debugger
        const newState = Modifier.replaceWithFragment(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            pastedBlocks
        );
        debugger
        this.handleChange(EditorState.push(editorState, newState, 'insert-fragment'));
    }
    handleChange = (editorState) => {
        const currState = this.props.editor.getCurrentContent()
        const newState = editorState.getCurrentContent();
        const currSelection = this.props.editor.getSelection();
        const newSelection = editorState.getSelection();
        debugger
        console.log("HandleChange")

        if (currState === newState) {

            console.log("SELECTION Change")

            if (!editorState.getSelection().isCollapsed()) {
                console.log("SELECTION")
                debugger
                this.props.activateChordForm()
                const cs = this.insertLine(editorState.getSelection(), newState)
                //Modifier.applyInlineStyle(newState, editorState.getSelection(), 'SPACE')
                debugger
                const es = EditorState.push(editorState, cs, "change-style")


                this.props.updateSong(es)
            } else {
                if (this.props.UI.chordForm.active) this.props.deactivateChordForm()
                this.props.updateSong(editorState)
            }
        } else if (currSelection !== newSelection) {
            debugger
            this.props.updateSong(editorState)
        }


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

    handleTextDouble = (e) => {
        e.preventDefault();

        const { editor } = this.props
        const cs = RichUtils.toggleInlineStyle(editor, "BOLD")
        debugger
        this.handleChange(cs)
    }
    bindKeys = (e) => {
        if (e.key === "r" && hasCommandModifier(e)) {
            return "chord-menu"
        }
        return getDefaultKeyBinding(e)
    }


    handleKeyCommand = (command, editorState) => {
        if (command === "chord-menu") {
            debugger
        }
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.handleChange(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    getBlockStyle(contentBlock) {
        const type = contentBlock.getType();
        debugger
        switch (type) {
            case "expand":
                return "expand";
            case "verse":
                return "verse";
        }
    }
    handleTab = (e) => {
        e.preventDefault();

        const { editor } = this.props
        const cs = Modifier.insertText(editor.getCurrentContent(), editor.getSelection(), "\t")
        this.handleChange(EditorState.push(editor, cs, "insert-characters"))
    }
    saveTitle = () => {

        console.log(this.props, this.state)
        debugger
        this.props.saveTitle(this.state.tempTitle, this.props.id)
        this.setState({ editTitle: false })
    }
    title = () => {
        if (!this.state.editTitle) {
            return <div className="title" onDoubleClick={this.handleDouble}>{this.props.song.title}</div>
        } else {
            return <input className="title edit" value={this.state.tempTitle} onBlur={this.saveTitle} onChange={this.handleChangeTitle}></input>
        }
    }

    render() {
        return <div className="workshop" >
            <div className="header">
                {this.title()}

            </div>
            <div className="content">
                <div className="editor-wrap" >
                    <Editor keyBindingFn={this.bindKeys}
                        handlePastedText={this.handlePastedText}
                        blockStyleFn={this.getBlockStyle}
                        handleKeyCommand={this.handleKeyCommand}
                        onDoubleClick={() => this.handleKeyCommand("chord-menu", this.props.editor)}
                        onTab={this.handleTab}
                        ref={this.editor}
                        editorState={this.props.editor}
                        onChange={this.handleChange} />
                </div>
                <div className="utilities">
                    <button className="save-button" onClick={this.handleClick}>SAVE</button>
                </div>
            </div>
        </div >
    }
}


function mapStateToProps(state) {
    return {
        song: state.song,
        editor: state.editor,
        UI: state.workshop
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSong: (song) => dispatch(Actions.updateSong(song)),
        fetchSong: (id) => dispatch(Actions.fetchSong(id)),
        saveSong: (song, editor) => dispatch(Actions.saveSong(song, editor)),
        saveTitle: (title, id) => dispatch(Actions.saveTitle(title, id)),
        activateChordForm: () => dispatch(Actions.activateChordForm()),
        deactivateChordForm: () => dispatch(Actions.deactivateChordForm())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongText)
