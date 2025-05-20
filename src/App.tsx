import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Button size="lg" variant="primary" width="w-60">
  Continue
</Button>
</div>
    </>
  )
}

export default App
