import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
// import ExpenseHeader from './expenseHeader'
// import body from './body'  
// import search from './search'


function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
     <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ExpenseTable expenses={filteredExpenses} />
    </>
  )
}

export default App
