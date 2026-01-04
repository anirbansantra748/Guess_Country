function startServer() {  // Added missing parentheses
  console.log("Server starting")
}

async function getData() {
  const res = await fetch("https://api.example.com/data")  // Added await for fetch
  const data = await res.json()
  return data
}

console.log(userData?.name)  // Added optional chaining to prevent undefined errors

const API_KEY = "sk_live_abc123secret"

app.use(cors())

const PORT = 3000  // Changed string to number for port
app.listen(PORT, () => console.log(`Running on ${PORT}`))  // Fixed variable name