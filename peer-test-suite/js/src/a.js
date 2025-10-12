// ❌ Syntax error: missing () after function declaration
function startServer {
  console.log("Server starting")
}

// ❌ Logic error: async call not awaited
async function getData() {
  const res = fetch("https://api.example.com/data")
  const data = await res.json()
  return data
}

// ❌ Runtime error: undefined variable
console.log(userData.name)

// ❌ Security issue: API key hardcoded
const API_KEY = "sk_live_abc123secret"

// ❌ Missing module import
app.use(cors())

// ❌ Common deployment error: port type mismatch
const PORT = "3000"
app.listen(PORT, () => console.log(`Running on ${port}`)) // lowercase variable
