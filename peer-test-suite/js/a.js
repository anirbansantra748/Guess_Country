function startServer() {  // fixed: added parentheses
  console.log("Server starting")
}

async function getData() {
  const res = await fetch("https://api.example.com/data")  // fixed: added await
  const data = await res.json()  // fixed: added await
  return data
}

console.log(userData?.name)  // fixed: added optional chaining

const API_KEY = process.env.API_KEY || ""  // fixed: replaced hardcoded key with env var

app.use(cors({
  origin: "https://example.com"  // fixed: restricted CORS to specific origin
}))

const port = 3000  // fixed: changed to number type
app.listen(port, () => console.log(`Running on ${port}`))  // fixed: corrected PORT to port