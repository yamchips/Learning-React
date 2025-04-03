import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Table from "./components/Table";
import { FieldValues } from "react-hook-form";

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

  return (
    <>
      <Cart onSubmit={onSubmit}></Cart>
      <Table content={content} onDelete={handleDelete}></Table>
    </>
  );
}

export default App;
