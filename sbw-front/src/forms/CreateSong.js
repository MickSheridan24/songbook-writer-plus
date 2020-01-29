import React from 'react'

class CreateSong extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Untitled",
            artist: ""
        }
    }
    handleCreate = () => {
        this.props.create({ title: this.state.title, artist: this.state.artist })
        this.props.cancel()

    }

    render() {
        return (
            <div className="form create-song">
                <input value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}></input>
                <input value={this.state.artist}
                    onChange={e => this.setState({ artist: e.target.value })}></input>
                <button onClick={this.handleCreate}>Create</button>
                <button onClick={this.props.cancel}>Cancel</button>
            </div>
        )
    }
}

export default CreateSong
