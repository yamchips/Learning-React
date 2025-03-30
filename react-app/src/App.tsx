import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const handleClick = function () {
    setVisibility(true);
  };
  const [visible, setVisibility] = useState(false);

  const cities = ["New York", "London", "Paris", "Hong Kong", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Message></Message>
      </div>
      <div>
        <ListGroup
          items={cities}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>
      <div>
        {visible && (
          <Alert onClose={() => setVisibility(false)}>
            An example alert <span>for beginners</span>
          </Alert>
        )}
        <Button color="primary" onClick={handleClick}>
          Primary
        </Button>
      </div>
    </>
  );
}

export default App;
