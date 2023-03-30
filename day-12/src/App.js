
import './App.css';

import {useState,useRef} from 'react'

function App() {

  useRef.current = 0;

  const [attemp , setAttemp] =useState(0);
  const [value ,setValue] = useState(0)
  const [showdata,setShowdata] = useState(false)

  


  const handelchange=(e)=>{
    const newvalue =Number(e.target.value);
    setValue(newvalue)

  }




  const handelClick=()=>{
    setShowdata(false)
    setAttemp(attemp+1)
   let lucky=Math.floor(Math.random() * (20-1+1)+1 )  
    
      if(lucky > value){
        alert("you guessed a smaller number ")
      }

      if(lucky < value){
        alert("you guessed a bigger number ")

      }

      if(lucky == value){

        setShowdata(true)
        // alert(`congratulations you guessed the right number in ${useRef.current} attemp`)
      }
      

      // console.log(useRef.current)
  
  }
  return (
    <div className="App">
      

      <input onChange={handelchange} type="text" placeholder='Guess lucky number...' maxLength={2}  />
      <button onClick={handelClick}>Match Number</button>

      
        {showdata ? 
          <h1>congratulations you guessed the right number in {attemp} attemp</h1>
          
          : null}
      
    </div>
  );
}

export default App;
