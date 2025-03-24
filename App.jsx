import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import './App.css'
import ExpenseTable from './components/ExpenseTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="expense-table">
        <ExpenseTable />
      </div>
    </>

  )
}

export default App
