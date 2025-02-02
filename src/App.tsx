import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

  // this is a side effect because document is not a part of react and this function
  document.title = `count: ${count}`;

	return <>
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </>;
}

export default App;
