
import './checkbox.css'

const Checkbox =()=>{

    return (

        <div className="checkbox">
            <div>
            <input type="checkbox" />
            <p className='remember'> Remember me</p>
            </div>
           
            <p className='forgot'>Forgot Password</p>
        </div>


    )
}


export {Checkbox}