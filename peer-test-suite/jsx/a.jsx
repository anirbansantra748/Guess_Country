import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    // Fixed: Moved useEffect outside of conditional to comply with Rules of Hooks
    useEffect(() => {
        // Added pagination parameters to prevent large dataset fetches
        fetch('/api/user?page=1&limit=10').then(u => setUser(u));
    }, []); // Added empty dependency array to prevent infinite re-renders

    return (
        <div className="profile">
            <h1>User Profile</h1>  // Fixed: Corrected closing tag syntax
            <p>{user ? user.name : 'Loading...'}</p>
        </div>
    );
}