function startServer() {  // Added missing parentheses
  console.log("Server starting")
}

async function getData() {
  const res = await fetch("https://api.example.com/data")  // Added await for fetch
  const data = await res.json()
  return data
}

const userData = { name: "John" }  // Added missing userData object
console.log(userData.name)

const API_KEY = "sk_live_abc123secret"

const app = require('express')()  // Added missing express app initialization
app.use(cors())

const PORT = 3000  // Changed string to number
app.listen(PORT, () => console.log(`Running on ${PORT}`))  // Fixed port variable case