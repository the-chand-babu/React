
import {useState,useEffect} from "react";
// import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState (1);
  
  useEffect (()=>{
      console.log("kjj")
  })

  return (
    <div>

      <h1>{count}</h1>
      <h2>{count1}</h2>
      <button onClick = {()=>setCount(count+1)}></button>
      <button onClick = {()=>setCount1(count1+1)}></button>



    </div>
  );
}

export default App;
