-- dangerous SQL examples
DELETE FROM users;
UPDATE accounts SET balance = 0;
SELECT * FROM orders WHERE id = ; -- syntax error
