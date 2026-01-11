CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount DECIMAL
);

-- High Level Error: Missing JOIN condition (Cartesian Product)
-- This query returns every order for every user, creating a massive result set
-- instead of matching users to their specific orders.
SELECT *
FROM users u, orders o
WHERE u.id > 10; // Should be: AND u.id = o.user_id