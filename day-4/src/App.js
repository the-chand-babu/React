
import './App.css';

import { Cart } from './component/cart';

let Users=[
  {
    name : "Amit",
    image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    designation : "Graphic Designer" ,
    description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design." 
  },
  {
    name : "Ruhi",
    image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
    description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups." ,
    designation : "Singer"
  }
  
  
]

function App() {
  return (
    <div className="App">
  {Users.map(item => <Cart item={item} /> )}
    </div>
  );
}

export default App;
