import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux/actions/bookActions'
import BookCard from "../components/BookCard"

class Library extends Component {


    async componentDidMount() {
        if (!this.props.library.books.length) {
            await this.props.fetchBooks()
        }
    }

    renderBooks = () => {
        return this.props.library.books.map(b => {
            return <BookCard title={b.title} id={b.id}></BookCard>
        })
    }

    render() {
        return (
            <div className="library" >
                Library
                {this.props.library.books ? this.renderBooks() : null}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        library: state.library
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)