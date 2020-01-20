import React from "react"
import { connect } from "react-redux"
import { type } from "../redux/actions/songActions.js"
import ReactDOM from "react-dom";

class Cursor extends React.Component {

    componentDidMount() {
        console.log("worked")
        ReactDOM.findDOMNode(this.refs.cursor).focus();
    }

    render() {
        return <div
            className="cursor"
            ref="cursor"
            tabIndex="0"
            onKeyDown={(e) => this.props.type(e.key)} ></div>
    }
}


function mapStateToProps(state) {
    return {
        song: state.song
    }
}

function mapDispatchToProps(dispatch) {
    return {
        type: key => {
            console.log("mdtp")
            dispatch(type(key))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cursor)



