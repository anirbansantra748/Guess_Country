import React, { useState } from "react"


export default function App() {
  const [data, setData] = useState()

  useEffect(() => { 
    fetch("/api")
    .then(res => res.json())
    .then(result => setData(result))
  }, [])

  return (
    <div>
      <h1>Welcome<h1> {}
      <p>{data.title}</p> {}
      <Button>Click</button> {}
    </div>
  )
}
