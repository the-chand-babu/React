
import './navbar.css'

import { Link } from 'react-router-dom'

const Navbar  = ()=>{


    return (

        <div className= "navbar">
            <div className='image-div'>
                <img src="https://www.techprevue.com/wp-content/uploads/2016/07/mobile-app-ux-ui-basics.jpg" alt="" />
            </div>
            <div className='pagelink-div'>
                <Link to='/' className='link'>
            <h1 >Home</h1>

                </Link>
                <Link to='/about' className='link'>
            <h1 >About</h1>

                </Link>

                <Link to='/login' className='link'>
            <h1 >Log In</h1>

                </Link>
            </div>
          


        </div>


    )
}


export {Navbar}