import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div className = "nav">
            {/* creates an a tag, creates nav link */}
            <Link className = "nav-link" to="/">
                <div>Steven Leftovers Albums</div>
            </Link>
            <Link className = "nav-link" to = "/Albums">
                <div>Album List</div>
            </Link>
        </div>
    )
}

export default Nav