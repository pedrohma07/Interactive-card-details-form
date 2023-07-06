import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardBack from './components/CardBack'
import FormLogin from './components/FormLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
      <CardBack />
      <FormLogin />
    </>
  )
}

export default App
