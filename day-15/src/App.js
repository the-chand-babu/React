import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(2);
  let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const hanelupdate = () => {
    const value = Math.floor(Math.random() * 100 + 1);
    setCount(value);
  };

  return (
    <div className='App'>
      <h1>Table Generator !</h1>
      <ul>
        {Array.map((ele) => {
          return <li>{count * ele}</li>;
        })}
      </ul>

      <button onClick={hanelupdate}>Update</button>
    </div>
  )
}

export default App;
