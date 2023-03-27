
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import { About } from './component/about';
import { Home } from './component/home';
import { Login } from './component/login';
import {Register} from './component/register.js'

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Login/> */}

      <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
