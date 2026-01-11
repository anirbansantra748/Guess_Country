import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    // Simple Error: useEffect inside conditional (violates Rules of Hooks)
    if (!error) {
        useEffect(() => {
            // High Level Error: Missing pagination - fetches unbounded data
            fetch('/api/user').then(u => setUser(u));
        }); // Missing dependency array causes infinite re-renders
    }

    return (
        <div className="profile">
            <h1>User Profile</h1  // Simple Error: Missing closing angle bracket
            <p>{user ? user.name : 'Loading...'}</p>
        </div>
    );
}