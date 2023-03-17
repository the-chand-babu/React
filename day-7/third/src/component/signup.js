    import { Heading } from "./heading"
    import { Input } from "./input"
    import { Checkbox } from "./checkbox"
    // import './App.css'


const Signup =()=>{

    return (
    <div className='signup'>
    <Heading name="Signup in your account" />
      <Input type="text" name="FirstName" placeholder ="enter your FirstName"/>
      <Input type="text" name="LastName" placeholder ="enter your LastName"/>
      <Input type ='email' name="Email" placeholder ="enter your Email"/>
      <Input type ='password' name="Password" placeholder ="enter your Password"/>
      <Checkbox/>

        </div>
    )


}

export {Signup}