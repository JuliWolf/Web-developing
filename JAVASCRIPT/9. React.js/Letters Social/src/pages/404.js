import React from 'react';
import Link from '../components/router/Link';

export const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Not Found: (</h2>
            <Link to="/">
                <button>Go back Home</button>
            </Link>
        </div>
    )
};

export default NotFound;
