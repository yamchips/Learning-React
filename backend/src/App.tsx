import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

// define the User interface so we have hint when using data, put it in user-service.ts file
// interface User {
//   id: number;
//   name: string;
// }

function App() {
  // // 5. fetch data
  // const [users, setUsers] = useState<User[]>([]);

  // // 7. handling errors
  // const [error, setError] = useState("");

  // // 10. show a loading indicator
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   // 8. use async and await, the code is complex, prefer then-catch way
  //   // const fetchUsers = async () => {
  //   //   try {
  //   //     const res = await axios.get<User[]>(
  //   //       "https://jsonplaceholder.typicode.com/xusers"
  //   //     );
  //   //     setUsers(res.data);
  //   //   } catch (err) {
  //   //     setError((err as AxiosError).message);
  //   //   }
  //   // };
  //   // fetchUsers();

  //   // 9. cancel a fetch request, move to user-service.ts file
  //   // const controller = new AbortController();

  //   // 10. show a loading indicator
  //   setLoading(true);

  //   // apiClient
  //   //   .get<User[]>("/users", {
  //   //     signal: controller.signal,
  //   //   })
  //   const { request, cancel } = userService.getAll<User>();
  //   request
  //     .then((res) => {
  //       setUsers(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       if (error instanceof CanceledError) return;
  //       setError(error.message);
  //       setLoading(false);
  //     });

  //   return () => cancel();
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then((res) => res.json()) // parse json response
  //   //   .then((data) => setUsers(data)) // set users state
  //   //   .catch((error) => console.error("error fetching data:", error)); // handle error
  // }, []);

  // 17. creating a custom data fetching hook, move above code snippet to useUsers.ts file
  const { users, error, isLoading, setUsers, setError } = useUsers();

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
    // this code has side effect, so we put it inside useEffect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  // 11. deleting data
  const deleteUser = (user: User) => {
    // optimistic update: update UI then call the server
    // pessimistic update: call the server first then update UI
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  // 12. creating data
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);
    userService
      .add(newUser)
      .then((res) => setUsers([res.data, ...users])) // .then(({data: savedUser} => setUsers([savedUser, ...users]))); // savedUser is an alias
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // 13. updating data
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "_two" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    // put or patch? put: replacing an object; patch: patching or updating one or more of its properties
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

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
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
