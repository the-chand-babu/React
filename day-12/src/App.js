
import './App.css';

import {useState,useRef} from 'react'

function App() {

  useRef.current = 0;

  

let value = 0
  const handelchange=(e)=>{
    value =Number(e.target.value);

  }




  const handelClick=()=>{
    useRef.current++;
   let lucky=Math.floor(Math.random() * (20-1+1)+1 )  
    
      if(lucky > value){
        alert("you guessed a smaller number ")
      }

      if(lucky < value){
        alert("you guessed a bigger number ")

      }

      if(lucky == value){
        alert(`congratulations you guessed the right number in ${useRef.current} attemp`)
      }
      console.log(useRef.current)
  
  }
  return (
    <div className="App">
      

      <input onChange={handelchange} type="text" placeholder='Guess lucky number...' maxLength={2}  />
      <button onClick={handelClick}>Match Number</button>
    </div>
  );
}

export default App;
