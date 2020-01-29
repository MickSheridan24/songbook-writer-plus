import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Untitled",
            artist: ""
        }
    }

    render() {
        return (
            <div className="form create-song">
                <input value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}></input>
                <input value={this.state.artist}
                    onChange={e => this.setState({ artist: e.target.value })}></input>
                <button onClick={() => this.props.create({ title: this.state.title, artist: this.state.artist })}>Create</button>
                <button onClick={() => this.props.cancel()}>Cancel</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateSong)
