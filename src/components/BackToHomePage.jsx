import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToHomePage() {
    return (
        <div>
            <Link to="/MovieList">Back to home page</Link>
        </div>
    )
}
