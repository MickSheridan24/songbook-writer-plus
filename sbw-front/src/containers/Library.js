import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux/actions/bookActions'
import BookCard from "../components/BookCard"

class Library extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        if (!this.props.books.length) {
            await this.props.fetchBooks()
        }
    }

    renderBooks() {

        return this.props.books ? this.props.books.map(b => {
            return <BookCard title={b.title} id={b.id}></BookCard>
        }) : null
    }
    render() {
        return (
            <div className="library">
                Library
                {this.renderBooks()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        books: state.library.books
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)