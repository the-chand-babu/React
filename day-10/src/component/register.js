
import { Navbar } from "./navbar";
import {Link} from 'react-router-dom'

const Register = ()=>{
    return (

        <div>
        <Navbar/>
    <div className='login-div'>
        <input type="email" placeholder="Enter your Email" />

        <input type="text" placeholder='Enter Email address'/>
        <br />
        <input type="password"  placeholder='Enteer password'/>
        
        <div className='box-button-div'>
        <div className='register-link-div'>
        
        <p> have an Acount ?</p>
               <br />
               <Link to='/login' className='register-link'>Login</Link>
         </div>
         <button>Register</button>

</div>
        </div>



    </div>
        
    )
}

export {Register}