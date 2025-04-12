import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]); // State to store expenses
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  


  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setExpenses([...expenses, formData]); // Add new expense to the list
    setFormData({ name: '', description: '', category: '', amount: '', date: '' }); // Reset form
  };
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <>
      <header>
        <h1>Express Tracker</h1>
        <p>Start taking control of your finances and life records,<br /> categorize and analyze your spending</p>
      </header>
     
     <section>
      <h2> <b>Add Expense</b></h2>
      <p>Enter your expense details below</p>
       <form onSubmit={handleSubmit}>
        <input type="text"  name="name" placeholder="enter expense name" value={formData.name}
            onChange={handleInputChange}/>{' '} <br />
        <input type="text" name="description" placeholder="enter expense description"  value={formData.description}
            onChange={handleInputChange}/>{' '}<br />
        <input type="text" name="category" placeholder="enter expense category" value={formData.category}
            onChange={handleInputChange}/>{' '}<br />
        <input type="number" name="amount" placeholder="enter amount"  value={formData.amount}
            onChange={handleInputChange}/>{' '}<br />
        <input type="date" name="date" id="dateInput" id="dateInput" value={formData.date}
            onChange={handleInputChange}/> {' '}<br />
        <button type="submit">submit</button>
       </form>
         </section>

         <div className="search-bar">
          <input type="text" placeholder="search expenses" value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>


         <div className="table-container">

         

          <table>
            <tr >
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>

            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
           ))}

          </table>

          </div>


         
      
    </>
  )
}

export default App
