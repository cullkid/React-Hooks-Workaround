// Import necessary libraries and styles
import React, { useState } from 'react';
import './ExpenseTracker.scss';

// Define the ExpenseTracker component
const ExpenseTracker = () => {
  // Set up state for expenses list, expense name, and expense amount
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [changeButton, setChangeButton] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding a new expense
  const handleAddExpense = (e) => {
    // Prevent the form from refreshing the page
    e.preventDefault();

    // Check if both inputs have values
    if (expenseName.trim() && expenseAmount.trim()) {
        // This edits the expenses for the index provided
        if (editIndex !== null) {
          const updatedExpenses = [...expenses];
          updatedExpenses[editIndex] = {
            name: expenseName.trim(),  
            amount: parseFloat(expenseAmount),
          };
          setExpenses(updatedExpenses);
          setEditIndex(null);
        }else{
      // Add the new expense to the expenses list and reset the input fields
      setExpenses([
        ...expenses,
        { name: expenseName.trim(), amount: parseFloat(expenseAmount) },
      ]);}
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  //editing button function
  const  handleEdite = (index) => {
    setEditIndex(index);
    setExpenseName(expenses[index].name)
    setExpenseAmount(expenses[index].amount)
    setChangeButton(true)
  }

  // Calculate the total expense by summing up all expense amounts
  const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  // Render the component
  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleAddExpense}>
      
        {/* Input field for the expense name */}
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        {/* Input field for the expense amount */}
        <input
          type="number"
          step="0.01"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        {/* Button to add a new expense */}
        <button  type="submit">{changeButton ? 'Update Expenses' : 'Add Expenses'}</button>
       
      </form>
       
      {/* List of expenses */}
       <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: £{expense.amount.toFixed(2)}
            <button onClick={() => handleEdite(index)}>edit</button>
          </li>
        ))}
      </ul>
      {/* Display the total expense */}
      <p>Total Expense: £{totalExpense.toFixed(2)}</p>
    </div>
  );
};

// Export the component for use in other parts of the application
export default ExpenseTracker;
