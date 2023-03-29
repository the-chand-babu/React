
import {Navbar} from './component/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from './component/Home';
import { About } from './component/about';
import { Login } from './component/login';
import { Register } from './component/register';

import './App.css';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Navbar/>

    <Routes>

    <Route path='/' element ={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/register' element ={<Register/>}/>





    </Routes>

</BrowserRouter>
     
    </div>
  );
}

export default App;
