import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardBack from './components/CardBack'
import FormLogin from './components/FormLogin'

import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
