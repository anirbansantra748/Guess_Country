
function startServer {
  console.log("Server starting")
}


async function getData() {
  const res = fetch("https://api.example.com/data")
  const data = await res.json()
  return data
}


console.log(userData.name)


const API_KEY = "sk_live_abc123secret"


app.use(cors())


const PORT = "3000"
app.listen(PORT, () => console.log(`Running on ${port}`)) // lowercase variable
