
import './home.css'

import {Navbar} from './navbar.js'


const Home = ()=>{
    
    const user = [
        {
            img:'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name:"jack-synder",
            designation:'produdct Manager'
        },
        {
            img:'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:"jack-synder",
            designation:'produdct Manager'
        },
        {
            img:'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:"jack-synder",
            designation:'produdct Manager'
        },
        {
            img:'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:"jack-synder",
            designation:'produdct Manager'
        },
        

    ]

    return (

        <div>
      <Navbar/>

      <div className='home-div'>

            {
                user.map((users)=>{
                    // {console.log(users)}
                    return(

                        <div className="home-img-div">
                        <img src={users.img} alt={users.name} />
                        <div className='home-name-div'>
                            <h2>{users.name}</h2>
                            <p>{users.designation}</p>
                        </div>
                    </div>
                    )
                    
                })
            }

        </div>

        </div>
        
    )
}

export {Home}