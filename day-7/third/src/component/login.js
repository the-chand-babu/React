import { Heading } from "./heading"
import { Input } from "./input"
import { Checkbox } from "./checkbox"

const Login =()=>{

    return (

        <div>
              <Heading name="Login in your account" />

       <Input type ='email' name="Email" placeholder ="enter your Email"/>
      <Input type ='password' name="Password" placeholder ="enter your Password"/>
      <Checkbox/>
        </div>

    )
}

export {Login}