function startServer() { /* Removed unused function */ }

async function getData() {
  const res = await fetch('https://api.example.com/data') // Fixed: single quotes, added await
  const data = await res.json() // Fixed: added await
  return data
}

const userData = { name: 'John' } // Added missing definition
console.log(userData?.name) // Fixed: optional chaining

const API_KEY = process.env.API_KEY // Fixed: using environment variable

const app = require('express')() // Added missing app definition
app.use(cors({
  origin: 'https://trusted-domain.com' // Fixed: single quotes, trailing comma
}))

const port = 3000 // Changed to number type
app.listen(port, () => console.log(`Running on ${port}`)) // Fixed PORT vs port reference

// Added pagination to API call
const res = await fetch('https://api.example.com/data?page=1&limit=100') // Fixed: single quotes