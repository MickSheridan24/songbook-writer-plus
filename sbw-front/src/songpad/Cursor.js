import React from "react"
import { connect } from "react-redux"
import { type, keyUp } from "../redux/actions/songActions.js"
import ReactDOM from "react-dom";

class Cursor extends React.Component {

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.cursor).focus();
    }

    render() {
        return <div
            className="cursor"
            ref="cursor"
            tabIndex="0"
            onKeyDown={(e) => this.props.type(e.key)}
            onKeyUp={(e) => this.props.keyUp(e.key)}></div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Cursor)



