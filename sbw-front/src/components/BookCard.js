import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Card
                <Link to={"/books/" + this.props.id}>{this.props.title}</Link>
            </div>
        )
    }
}

export default BookCard