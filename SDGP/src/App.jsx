import { useState } from 'react'
import SignIn from './components/SignIn/SignIn.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <h1>hi !</h1>
    //   <p>You clicked {count} times.</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div>
    <SignIn />
  )
}

export default App
