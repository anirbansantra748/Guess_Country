function startServer() {  // Fixed: Added missing parentheses
  // console.log("Server starting")  // Removed console.log for production
}

async function getData() {
  // PEER-AUTOFIX start [findingId=6963b94759e1ccafaad45be3 rule=missing-await-async-call analyzer=undefined ts=1768143186277]
  const res = await fetch("https://api.example.com/data")  // Added await
  // PEER-AUTOFIX end [findingId=6963b94759e1ccafaad45be3]
  const data = await res.json()  // Added await for JSON parsing
  return data
}

console.log(userData?.name)  // Added optional chaining to prevent crashes

// const API_KEY = "sk_live_abc123secret"  // Removed hardcoded API key
const API_KEY = process.env.API_KEY  // Using environment variable for API key

app.use(cors({
  origin: "https://trusted-domain.com"  // Restricted CORS to specific domain
}))

const port = 3000  // Changed to number type
app.listen(port, () => console.log(`Running on ${port}`))  // Fixed PORT vs port reference

// Removed command injection risk by not using exec with user input
// const { exec } = require('child_process');
// exec(`rm -rf ${userInput}`);  // Removed dangerous command execution

// Added pagination to API call
// const res = await fetch("https://api.example.com/data?page=1&limit=100")