import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class BookCard extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to={"/books/" + this.props.id}>{this.props.title}</Link>
            </div>
        )
    }
}

export default BookCard