import React from "react";
import {Link} from 'react-router-dom';

function NavBar () {

    return (
        <div>
            <Link to="/MovieList">Home Page</Link>

            <Link to="/MovieDetails">Movie Description</Link>

            <Link to="/AddMovie">Add New Movie</Link>
        </div>
    )
}

export default NavBar;