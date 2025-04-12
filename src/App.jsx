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
        <p>Start taking control of your finances and life records,<br /> categorize and analyze your spending</p>
      </header>
     
     <section>
      <h2> <b>Add Expense</b></h2>
      <p>Enter your expense details below</p>
       <form action="">
        <input type="text" placeholder="enter expense name"/> <br />
        <input type="text" placeholder="enter expense description"/> <br />
        <input type="text" placeholder="enter expense category"/> <br />
        <input type="number" placeholder="enter amount"/> <br />
        <input type="date" id="dateInput" name="dateInput"/> <br />
        <button>submit</button>
       </form>
         </section>

         <div class="search-bar">
          <input type="text" placeholder="search expenses" />
          </div>


         <div class="table-container">

         

          <table>
            <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
            <tr>
              <td>matumbo</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>matumbo</td>
              <td>ugali</td>
              <td></td>
              <td>mayai</td>
              <td></td>
            </tr>
            <tr>
              <td>matumbo</td>
              <td>ugali</td>
              <td></td>
              <td>mayai</td>
              <td></td>
            </tr>
            <tr>
              <td>matumbo</td>
              <td>ugali</td>
              <td></td>
              <td>mayai</td>
              <td></td>
            </tr>


          </table>

          </div>


         
      
    </>
  )
}

export default App
