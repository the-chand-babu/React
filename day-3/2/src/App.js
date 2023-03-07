
import './App.css';
import { First } from './component/compo-1';
import { Input } from './component/compo-2';
import { Third } from './component/compo-3';
function App() {
  return (
    <div className="App">
      <First heading='Register here ...' />
      <Input  holder="mobile ..." />
      <br />
      <Input  holder="password ..." />
      <br />

      <Third name='Submit' />


    </div>
  );
}

export default App;
