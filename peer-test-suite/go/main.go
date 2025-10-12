package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func main() {
	db, _ := sql.Open("postgres", "user=foo dbname=bar")
// PEER-AUTOFIX start [findingId=undefined rule=sql-injection-risk analyzer=autofix ts=1760254111306]
// 	rows, _ := db.Query("SELECT * FROM users WHERE name = '" + "admin" + "'") // SQL injection style
	rows, _ := db.Query("SELECT * FROM users WHERE name = '" + "admin" + "'") // SQL injection style
// PEER-AUTOFIX end [findingId=undefined]
	defer rows.Close()
	fmt.Println(rows)
}
