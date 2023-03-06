import logo from './logo.svg';
import './App.css';

//exorting all the component
import {First} from './component/com-1'
import { Second } from './component/comp-2';
import { Third } from './component/comp-3';
import { Forth } from './component/comp-4.js';
function App() {
  return (
    <div className="App">
      <First/>
    <Second/>
    <Third/>
    <Forth/>
    </div>
  );
}

export default App;
