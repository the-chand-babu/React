import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
   //   3": [
  //     "create an array with multiple greetings",
  //     "create a button and handle click on button ",
  //     "show the next greeting message on h1"
  //   ]

  const [count, SetCount] = useState(0);

  let array = ['Happy aniversary ', 'Happy Birthday Rohit', 'happy new year', 'happy diwali', 'happy eid', 'happy indepdence day'];

  function handleCount() {
    if (count < array.length - 1) {
      SetCount(count + 1);
    } else {
      SetCount(0);
    }
  }

  return (
    <div className="App">
      <h1>{array[count]}</h1>
      <button onClick={handleCount}>Next Greeting</button>
    </div>
  );
}

export default App;
