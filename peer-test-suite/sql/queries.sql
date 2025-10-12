-- dangerous SQL examples
// PEER-AUTOFIX start [findingId=undefined rule=no-where-clause analyzer=autofix ts=1760254111321]
// DELETE FROM users;
DELETE FROM users;
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=update-no-where analyzer=autofix ts=1760254111322]
// UPDATE accounts SET balance = 0;
UPDATE accounts SET balance = 0;
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=select-star analyzer=autofix ts=1760254111322]
// SELECT * FROM orders WHERE id = ; -- syntax error
SELECT * FROM orders WHERE id = ; -- syntax error
// PEER-AUTOFIX end [findingId=undefined]
