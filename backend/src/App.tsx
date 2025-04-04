import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  // 5. fetch data
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json()) // parse json response
    //   .then((data) => setUsers(data)) // set users state
    //   .catch((error) => console.error("error fetching data:", error)); // handle error
  }, []);

  // 4. effect clean up
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnectiong");
  useEffect(() => {
    // connect();
    // return disconnect;
  });

  // 3. effect dependencies
  const [category, setCategory] = useState("");

  // 2. understanding effect hook
  const ref = useRef<HTMLInputElement>(null);
  // after render
  useEffect(() => {
    // this code has side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <div className="mb-3">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      {/* <ProductList category={category}></ProductList> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id + ": " + user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
