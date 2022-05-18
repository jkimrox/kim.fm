import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div className = "nav">
            {/* creates an a tag, creates nav link */}
            <Link className = "nav-link" to="/">
                <div>Home</div>
            </Link>
            <Link className = "nav-link" to = "/Albums">
                <div>Album List</div>
            </Link>
            <Link className = "nav-link" to = "/Tracks">
                <div>Top Tracks</div>
            </Link>
        </div>
    )
}

export default Nav