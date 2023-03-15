// import logo from './logo.svg';
import './App.css';


import {Heading} from './login/heading'
import{Input} from './login/input'
import {Checkbox} from './login/checkbox'
import {Button} from './login/button'

function App() {
  return (
    
    <div className="App">
      
      <div className='signup'>
      <Heading name="Signup in your account" />
      <Input type="text" name="FirstName" placeholder ="enter your FirstName"/>
      <Input type="text" name="LastName" placeholder ="enter your LastName"/>
      <Input type ='email' name="Email" placeholder ="enter your Email"/>
      <Input type ='password' name="Password" placeholder ="enter your Password"/>

      <Checkbox/>
      <Button name="Login"/>

      </div>
      
      <div className='login'>
      <Heading name = 'Log in your account'/>
      <Input name="Your Email" placeholder ="enter your Email"/>
      <Input name="Password" placeholder ="enter your Password"/>
      <Checkbox/>
      <Button name="Login"/>

      </div>


    </div>
    
    
    
  );
}

export default App;
