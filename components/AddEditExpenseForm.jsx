import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddEditExpenseForm = ({ expenses, setExpenses, expenseToEdit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    if (expenseToEdit) {
      return { ...expenseToEdit };
    } else {
      return {
        id: expenses.length + 1,
        date: "",
        category: "",
        amount: "",
        payment_method: "",
        description: "",
      };
    }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expenseToEdit) {
      const updatedExpenses = expenses.map((exp) =>
        exp.id === expenseToEdit.id ? { ...exp, ...formData } : exp
      );
      setExpenses(updatedExpenses);
    } else {
      setExpenses([...expenses, formData]);
    }

    navigate("/");
  };

  return (
    <>
      <h2>{expenseToEdit ? "Edit Expense" : "Add Expense"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={formData.id} disabled />

        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />

        <select name="payment_method" value={formData.payment_method} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </select>

        <input type="text" name="description" placeholder="Description (Optional)" value={formData.description} onChange={handleChange} />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default AddEditExpenseForm;
