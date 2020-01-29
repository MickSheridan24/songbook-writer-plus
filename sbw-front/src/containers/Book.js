import React from 'react'
import SongCard from "../components/SongCard"
import { connect } from "react-redux"
import { fetchBook } from "../redux/actions/bookActions"
import { createSong } from "../redux/actions/songActions"
import CreateSong from "../forms/CreateSong"

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            createForm: false,
            id: this.props.match.params.id
        }
    }

    async componentDidMount() {
        const id = this.state.id
        await this.props.fetchBook(id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.songs.length !== this.props.songs.length || this.state.createForm !== nextState.createForm
    }

    getSongs() {
        return this.props.songs ? this.props.songs.map(s => <SongCard key={s.id} id={s.id} title={s.title}></SongCard>) : null
    }

    toggleCreate = (b) => {
        this.setState({ createForm: b })
    }
    render() {
        return (
            <React.Fragment>
                <div className="book">
                    {this.getSongs()}
                </div>
                {this.state.createForm ?
                    <CreateSong
                        create={(params) => this.props.createSong({ ...params, bookId: this.state.id })}
                        cancel={() => this.toggleCreate(false)} bookid={this.state.id} />
                    : <button onClick={() => this.toggleCreate(true)}>NEW</button>}
            </React.Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        songs: state.book.songs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
        createSong: (params) => dispatch(createSong(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)

