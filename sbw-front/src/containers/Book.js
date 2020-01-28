import React from 'react'
import SongCard from "../components/SongCard"
import { connect } from "react-redux"
import { fetchBook } from "../redux/actions/bookActions"

class Book extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const { id } = this.props.match.params.id
        await this.props.fetchBook(id)
    }

    getSongs() {
        return this.props.songs ? this.props.songs.map(s => <SongCard id={s.id} title={s.title}></SongCard>) : null
    }

    render() {
        return (
            <div className="book">
                {this.getSongs()}
            </div>
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
        fetchBook: (id) => dispatch(fetchBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)

