package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func main() {
	db, _ := sql.Open("postgres", "user=foo dbname=bar")
	rows, _ := db.Query("SELECT * FROM users WHERE name = '" + "admin" + "'") // SQL injection style
	defer rows.Close()
	fmt.Println(rows)
}
