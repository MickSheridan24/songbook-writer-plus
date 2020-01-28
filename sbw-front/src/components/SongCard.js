import React, { PureComponent } from 'react'
import { NavLink as Link } from 'react-router-dom'

class SongCard extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="songcard">
                <Link to={"/song/" + this.props.id}>
                    {this.props.title}
                    {this.props.year || null}
                </Link>
            </div>
        )
    }
}

export default SongCard