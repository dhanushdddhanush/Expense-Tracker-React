import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ExpenseSortFilter from "./ExpenseSortFilter";

function ExpenseTable({ expenses, setExpenses, setExpenseToEdit }) {
  const [search, setSearch] = useState("");
  const [filteredExpense, setFilteredExpense] = useState(expenses);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setFilteredExpense(expenses);
  }, [expenses]);

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleAdd = () => {
    setExpenseToEdit(null);
    navigate("/add-edit");
  };

  const handleEdit = (expense) => {
    setExpenseToEdit(expense);
    navigate("/add-edit");
  };

  const filteredExpenses = filteredExpense.filter(
    (expense) =>
      expense.category.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase()) ||
      expense.payment_method.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <button onClick={handleAdd}>Add new expense</button>
      <input type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <ExpenseSortFilter data={expenses} setFilteredData={setFilteredExpense} />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Pay-Method</th>
            <th>Description</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.payment_method}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => handleDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;

// import React from 'react';
// import { useEffect , useState} from 'react';
// import { useNavigate } from "react-router-dom";
// function ExpenseTable() {
// const [expenses, setExpenses] = useState([]);
// const[search, setSearch]=useState('');
// useEffect(()=>{
//     fetch('http://localhost:8080/users')
//     .then((response) => response.json())
//     .then((data) => setExpenses(data));
// },[]);
// const navigate = useNavigate();
// useEffect(() => {
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//   }, [expenses]);
//   const handleAdd = () => {
   
//     navigate("/add-edit");
//   };
//   const handleSearch = expenses.filter(
//     (expense) =>
//         expense.email.toLowerCase().includes(search.toLowerCase()) ||
//     expense.username.toLowerCase().includes(search.toLowerCase()) 
//   );
//   const handleDelete = (id) => {
//     setExpenses(expenses.filter((expense) => expense.id !== id));
//   };
//   return (
//    <>
//    <input type="search"  name="search" id="" onChange={(e)=>setSearch(e.target.value)} />
//    <button onClick={handleAdd}>Add new expense</button>
// <table >
//     <thead>
//         <tr>
//             <th>Id</th>
//             <th>Date</th>
//             <th>Category</th>
//             <th>Amount</th>
            
//              <th>Modify</th>
//         </tr>
//     </thead>
//     <tbody>
// {
//     handleSearch.map((expense)=>(
//       <tr key={expense.id}>
//         <td>{expense.id}</td>
//         <td>{expense.username}</td>
//         <td>{expense.email}</td>
//         <td>{expense.password}</td>
//         <td><button>Edit</button> <button onClick={()=>handleDelete(expense.id)}>Delete</button></td>
//       </tr>
//     ))
// }
// </tbody>
// </table>
//    </> 
//    )
// }

// export default ExpenseTable;
