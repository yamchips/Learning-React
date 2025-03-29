import Button from "./components/Button";
import { Fragment } from "react/jsx-runtime";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const handleClick = function () {
    console.log("clicked");
    setVisibility(true);
  };
  let [visible, setVisibility] = useState(false);
  return (
    <div>
      {visible && (
        <Alert onClose={() => setVisibility(false)}>An example alert</Alert>
      )}
      <Button onClick={handleClick}>Primary</Button>
    </div>
  );
}

export default App;
