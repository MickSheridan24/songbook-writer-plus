import React from "react"
import { connect } from "react-redux"
import { type } from "../redux/actions/songActions.js"
import ReactDOM from "react-dom";

class Cursor extends React.Component {

    onComponentMount() {
        console.log("worked")
        ReactDOM.findDOMNode(this.refs.cursor).focus();
    }

    render() {
        return <div ref="cursor"
            tabIndex="0"
            onClick={(e) => console.log("click")}
            onKeyDown={(e) => {
                console.log("PRESS", e.key)
                this.props.type(e.key)
            }} > {this.props.song.text}</div>
    }
}


function mapStateToProps(state) {
    return {
        song: state.song
    }
}

function mapDispatchToProps(dispatch) {
    return { type: key => dispatch(type(key)) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cursor)



