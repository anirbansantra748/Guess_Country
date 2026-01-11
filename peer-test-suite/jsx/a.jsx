import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    // Fixed: Moved useEffect outside conditional to comply with Rules of Hooks
    useEffect(() => {
        // Added pagination parameters to prevent unbounded data fetching
        fetch('/api/user?limit=10&offset=0').then(u => setUser(u));
    }, []); // Added empty dependency array to prevent infinite re-renders

    return (
        <div className="profile">
            <h1>User Profile</h1> // Fixed: Added missing closing angle bracket
            <p>{user ? user.name : 'Loading...'}</p>
        </div>
    );
}