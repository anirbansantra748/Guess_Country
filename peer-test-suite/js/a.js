function startServer {  // Simple Error: Missing parentheses
  console.log("Server starting")
}

async function getData() {
  const res = fetch("https://api.example.com/data")  // High Level Error: Missing await
  const data = res.json()  // Will fail - res is a Promise, not Response
  return data
}

console.log(userData.name)  // Will crash if userData is undefined

const API_KEY = "sk_live_abc123secret"  // Security issue: hardcoded API key

app.use(cors())  // Security issue: open CORS

const port = "3000"  // Type issue: port as string
app.listen(port, () => console.log(`Running on ${PORT}`))  // Error: PORT vs port