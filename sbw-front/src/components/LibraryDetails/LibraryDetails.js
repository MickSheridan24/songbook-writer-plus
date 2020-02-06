import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Action from './LibraryActions'
import BookCard from "../BookCard"

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
        fetchBooks: () => dispatch(Action.fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)