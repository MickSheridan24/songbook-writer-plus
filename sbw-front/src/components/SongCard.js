import React, { PureComponent } from 'react'
import { NavLink as Link } from 'react-router-dom'

class SongCard extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div key={this.props.id} className="songcard">
                <Link to={"/songs/" + this.props.id}>
                    {this.props.title}
                </Link>
            </div>
        )
    }
}

export default SongCard