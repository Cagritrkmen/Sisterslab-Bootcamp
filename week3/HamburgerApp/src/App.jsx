import { useState } from "react"
import HamburgerApp from "./components/hamburger"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HamburgerApp />
    </div>
    </>
  )
}

export default App
