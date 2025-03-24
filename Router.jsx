import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ExpenseTable from "./components/ExpenseTable";
import AddEditExpenseForm from "./components/AddEditExpenseForm";
import React from "react";

export default function Router() {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/43abf0a0-62cd-444c-8043-01e571e216ea")
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpenseToEdit={setExpenseToEdit} />}
        />
        <Route
          path="/add-edit"
          element={<AddEditExpenseForm expenses={expenses} setExpenses={setExpenses} expenseToEdit={expenseToEdit} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
