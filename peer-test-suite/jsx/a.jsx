import React, { useState } from "react"

// ❌ Missing import for useEffect
export default function App() {
  const [data, setData] = useState()

  useEffect(() => { // ❌ useEffect undefined
    fetch("/api")
    .then(res => res.json())
    .then(result => setData(result))
  }, [])

  return (
    <div>
      <h1>Welcome<h1> {/* ❌ Unclosed tag */}
      <p>{data.title}</p> {/* ❌ data may be undefined */}
      <Button>Click</button> {/* ❌ Wrong closing tag */}
    </div>
  )
}
