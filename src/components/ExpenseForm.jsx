import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.date) {
      alert('Please fill out the required fields.');
      return;
    }
    onAddExpense(formData);
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <section>
      <h2><b>Add Expense</b></h2>
      <p>Enter your expense details below</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter expense name" value={formData.name} onChange={handleInputChange} /> <br />
        <input type="text" name="description" placeholder="Enter description" value={formData.description} onChange={handleInputChange} /> <br />
        <input type="text" name="category" placeholder="Enter category" value={formData.category} onChange={handleInputChange} /> <br />
        <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={handleInputChange} /> <br />
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} /> <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ExpenseForm;
