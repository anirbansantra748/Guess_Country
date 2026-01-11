
import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    // High Level Error: Conditional Hook Execution
    // Hooks must be called in the exact same order in every render. 
    // Putting useEffect inside an 'if' violates the Rules of Hooks.
    if (!error) {
        useEffect(() => {
            fetch('/api/user').then(u => setUser(u));
        }, []);
    }

    // Simple Error: Unclosed HTML tag / Invalid JSX syntax
    return (
        <div className="profile">
            <h1>User Profile<h1/> 
            {/* The closing tag above is malformed <h1/> instead of </h1> or </h1> is missing context */}
            <p>{user ? user.name : 'Loading...'}</p>
        </div>
    );
}
