// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'




import {Signup} from './component/signup'
import { Login } from './component/login';

function App() {

  const handelClick=()=>{
    if(showpage){
      setShowpage(null);
    setText('login')
    return;

    }
    setShowpage(true);
    setText('Signup')
  }

  const [showpage, setShowpage]=useState(null);
  const [text ,setText]= useState("login");
  return (
    
    <div className="App">
      {
        showpage?<div>
            <Login/>
            
        </div>:
        <Signup/>
      }
      {/* <Signup/> */}
      <span className='span'>signing here <button onClick={handelClick}>{text}</button></span>
      {/* <Login/> */}
    </div>
    
    
    
  );
}

export default App;
