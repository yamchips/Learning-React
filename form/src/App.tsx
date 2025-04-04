import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Table from "./components/Table";
import { FieldValues } from "react-hook-form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Display from "./components/Display";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { ExpenseFormData } from "./expense-tracker/components/ExpenseForm";
import Item from "./components/Item";

// *****************************************************************************
// solution part

function App() {
  const [content, setContent] = useState<Item[]>([]);

  const onSubmit = (data: FieldValues) => {
    const newData = {
      Description: data.description,
      Amount: data.amount,
      Category: data.category,
    };
    setContent([...content, newData]);
  };

  const handleDelete = (index: number) => {
    setContent((content) => content.filter((_, i) => i !== index));
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const onChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredContent = selectedCategory
    ? content.filter((row) => row.Category === selectedCategory)
    : content;
  // ****************************************************************
  // solution
  const [selectedCat, setSelectedCat] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaaa",
      amount: 4,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 5,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "cccc",
      amount: 6,
      category: "Groceries",
    },
  ]);
  const visibleExpenses = selectedCat
    ? expenses.filter((e) => e.category === selectedCat)
    : expenses;
  const handleSubmit = (expense: ExpenseFormData) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <>
      <div className="mb-3">
        <Cart onSubmit={onSubmit}></Cart>
      </div>
      <div className="mb-3">
        <Display
          onChange={onChange}
          selectedCategory={selectedCategory}
        ></Display>
      </div>
      <Table content={filteredContent} onDelete={handleDelete}></Table>
      <p className="fw-bold ">-----Solution-----</p>
      <div className="mb-3">
        <ExpenseForm onSubmit={handleSubmit}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCat(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
