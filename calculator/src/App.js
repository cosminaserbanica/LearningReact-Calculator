import React, { useState } from 'react'

export default function App() {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
      </div>
    </>
  )
}
