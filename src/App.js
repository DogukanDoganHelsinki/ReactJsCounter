import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  //let count = 0

  const increment = () => {
    //count += 1

    setCount(count + 1);
  };

  const decrement = () => {
    //count -=1

    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to my counter app</h1>
      <p className="count">The count is: {count}</p>
      <button className="button" onClick={decrement}>
        -
      </button>
      <button className="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default App;
