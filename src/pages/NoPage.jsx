import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
    return (
        <div>
            <h1>this is the 404 page</h1>
            <Link to='/home'>Back to Home page</Link>
        </div>
    )
}

export default NoPage
