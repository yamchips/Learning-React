import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Table from "./components/Table";
import { FieldValues } from "react-hook-form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Display from "./components/Display";

interface Item {
  Description: string;
  Amount: number;
  Category: string;
}

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

  // solution
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
      category: "Utilities",
    },
    {
      id: 3,
      description: "cccc",
      amount: 6,
      category: "Utilities",
    },
  ]);

  return (
    <>
      <Cart onSubmit={onSubmit}></Cart>
      <Display
        onChange={onChange}
        selectedCategory={selectedCategory}
      ></Display>
      <Table content={filteredContent} onDelete={handleDelete}></Table>
      {/* <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList> */}
    </>
  );
}

export default App;
