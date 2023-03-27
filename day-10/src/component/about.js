
import './about.css'
import { Navbar } from './navbar'



const About = ()=>{

    return (

        <div>
            <Navbar/>
            <div className = 'about-div'>
            <div className='img-div'>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            <div className='name-div'>
                <h1>Lesly Hansion</h1>
                <h5>Product Manager</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae molestiae illo sunt natus autem accusamus quisquam ea. Perferendis autem quasi sint modi culpa saepe eos, distinctio labore, ipsum enim earum?</p>
            </div>

        </div>

        </div>
       
    )


}


export {About}