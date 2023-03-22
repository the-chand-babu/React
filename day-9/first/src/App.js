// import logo from './logo.svg';
import './App.css';

import { Profile } from './component/profile';

function App() {
  const user = [
    {
      name:"Robin Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
      designation:'Product Manager @Uber India',
      exp:'4 Year Exp'
    },{
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    {
      name:"Abraham Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    {
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    {
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },{
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    {
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    {
      name:"lesli Alexander",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU',
      designation:'Product Manager @googel America',
      exp:'4 Year Exp'
    },
    

  ]
  return (
    <div className="App">
      <h2>Know Your mentors</h2>
      <p>Work with a mentor (senior data scientist from top companies) who closely looks at your progress, gives you personalized feedback 
        and helps you fill gaps in your knowledge.
      </p>
      <div className='profile-div'>
      {
        user.map((ele,index)=><Profile key={index} user={ele}/>)
      }
      </div>
     
    </div>
  );
}

export default App;
