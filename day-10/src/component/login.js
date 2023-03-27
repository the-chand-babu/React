
import {Link} from 'react-router-dom'
import { Navbar } from './navbar'

import './login.css'


const Login =()=>{

    return (

        <div>
            <Navbar/>
     <div className='login-div'>

            <input type="text" placeholder='Enter Email address'/>
            <br />
            <input type="password"  placeholder='Enteer password'/>
            <div className='box-button-div'>
            <div className='register-link-div'>
            
            <p>Dobt't have an Acount ?</p>
                   <br />
                   <Link to='/register' className='register-link'>Register</Link>
             </div>
             <button>Login</button>
   
   </div>
            </div>

    

        </div>

       
    )



}


export {Login}