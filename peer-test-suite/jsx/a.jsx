import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    // Fix 1: Move useEffect outside of conditional to avoid violating Rules of Hooks
    useEffect(() => {
        // Fix 2: Add dependency array to prevent infinite re-renders
        fetch('/api/user')
            .then(u => setUser(u))
            .catch(e => setError(true));
    }, []); // Fix 3: Add empty dependency array

    // Fix 4: Close the 'h1' tag properly
    return (
        <div className="profile">
            <h1>User Profile</h1>
            <p>{user ? user.name : 'Loading...'}</p>
        </div>
    );
}