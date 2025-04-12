import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Express Tracker</h1>
        <p>Start taking control of your finances and life records, categorize and analyze your spending</p>
      </header>
     
     <section>
      <h3>Add Expense</h3>
      <p>Enter your expense details below</p>
       <form action="">
        <input type="text" placeholder="enter exoense name"/> <br />
        <input type="text" placeholder="enter expense description"/> <br />
        <input type="text" placeholder="enter expense category"/> <br />
        <input type="text" placeholder="enter expense amount"/> <br />
        <button>submit</button>


       </form>
         </section>
      
    </>
  )
}

export default App
