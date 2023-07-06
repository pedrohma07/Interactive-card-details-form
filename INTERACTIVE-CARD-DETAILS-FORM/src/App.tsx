import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import CardBack from './components/CardBack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
      <CardBack />
    </>
  )
}

export default App
