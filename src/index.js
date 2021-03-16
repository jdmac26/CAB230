import React, { useState } from "react";
import ReactDOM from "react-dom";

function LikeCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  const superLike = () => {
    if (count >= 20) {
      return null;
    } else {
      setCount((oldCount) => oldCount + 10);
    }
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superLike}>Super Like</button>
    </div>
  );
}

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Headline title="Hello, World!" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
