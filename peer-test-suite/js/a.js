function startServer() {
  // console.log("Server starting")
}

async function getData() {
  const res = await fetch('https://api.example.com/data') // Added await and single quotes
  const data = await res.json() // Added await for JSON parsing
  return data
}

console.log(userData?.name) // Added optional chaining

const API_KEY = process.env.API_KEY // Using environment variable for API key

const port = 3000 // Changed to number type
app.listen(port, () => console.log(`Running on ${port}`)) // Fixed PORT vs port reference

// Added pagination to API call
const res = await fetch('https://api.example.com/data?page=1&limit=100') // Added single quotes and trailing comma