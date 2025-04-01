import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";
import { FaCalendar } from "react-icons/fa";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
  const items = ["London", "Paris", "New York", "Tokyo", "Beijing"];
  const heading = "Cities";
  const handleClick = function () {};
  return (
    <>
      <ListGroup items={items} heading={heading} onSelectItem={handleClick} />
      <div>
        <FaCalendar color="red" size={50} />
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Like onClick={() => console.log("clicked")}></Like>
      </div>
    </>
  );
}

export default App;
