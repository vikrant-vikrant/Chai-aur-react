import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function addValue() {
    setCounter(counter + 1);
    console.log("value added", counter);
  }
  function removeValue() {
    setCounter(counter - 1);
    console.log("value removed", counter);
  }
  if (counter > 5 ) {
    counter = 5;
  } else if (counter < 0) {
    counter = 0;
  } else {
    counter = counter;
  }
  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <footer>Footer</footer>
    </>
  );
}

export default App;
