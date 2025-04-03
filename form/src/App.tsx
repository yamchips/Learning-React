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

  return (
    <>
      <Cart onSubmit={onSubmit}></Cart>
      <Table content={content}></Table>
    </>
  );
}

export default App;
