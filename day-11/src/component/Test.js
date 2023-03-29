import {useState,useRef} from 'react'
import style from './test.module.css';
useRef.current= [];



const Test = ()=>{


    
  let flag = 0;
  const [count,setCount] = useState(0);
  
  
    let data = [
      {
        question : 'Today is monday after 63 days it will be.',
        option:["Tuesday","Monday",'Thursday',"Sunday"],
        CorrectAnswer :'Tuesday'
      },
      {
        question : 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?.',
        option:["(1/3)","(1/8)",'(2/8)',"(1/16)"],
        CorrectAnswer :'(1/8)'
      },{
        question : 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
        option:["7","10",'12',"13"],
        CorrectAnswer :'10'
      },{
        question : 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
        option:["20","22",'23',"26"],
        CorrectAnswer :'22'
      },{
        question : 'Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?',
        option:["22","24",'25',"26"],
        CorrectAnswer :'25'
      },{
        question : 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?',
        option:["12","14",'27',"53"],
        CorrectAnswer :'14'
      },{
        question : 'Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?',
        option:["14","15",'21',"23"],
        CorrectAnswer :'15'
      },{
        question : 'Look at this series: 58, 52, 46, 40, 34, ... What number should come next?',
        option:["26","28",'30',"32"],
        CorrectAnswer :'28'
      },{
        question : 'Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?',
        option:["7","10",'14',"15"],
        CorrectAnswer :'15'
      },{
        question : 'Look at this series: 8, 22, 8, 28, 8, ... What number should come next?',
        option:["9","29",'32',"34"],
        CorrectAnswer :'34'
      },
    ]
  
    const handelClick=(e)=>{
  // console.log(e.target.value)
      if(count==10){
        return;
      }
      setCount(count+1)
    }
  
    const handelrestarttest=()=>{
      setCount(0)
    }
  
    const handelChange=(e)=>{
  
      useRef.current[count]=e.target.value;
      console.log(useRef.current)
      
      
    
    }





    return (
        <>

{
        count=== 10?
        <div>
          {
            
            useRef.current.forEach((ele,index)=>{
              if(ele === data[index].CorrectAnswer){
                  flag++;
              }
            })

            
            
          }
          {(flag*2) >= 10? <div className={style.greetingDiv}>
            <h1>
            Congratulation You are passed
            </h1>
          <p>your score is {flag*2}</p>

          </div> :
              <div className={style.scoreDiv}>
                <h1>Your Score is less</h1>
          <p>your score is {flag*2}</p>
                
                <button onClick={handelrestarttest}>Restart Test</button>
              </div>
            }
          
        </div >
        :<>
        <h1 className={style.heading}>Question : ({count+1})</h1>
        <h1 className={style.question}>{data[count].question}</h1>
        <div>
          
        <input type="radio" id="option" name='option' onChange={handelChange}  value={data[count].option[0]}/>
        <label htmlFor="option">{data[count].option[0]}</label><br/>

        <input type="radio" id="option" name='option' onChange={handelChange} value={data[count].option[1]}/>
        <label htmlFor="option">{data[count].option[1]}</label><br/>

        <input type="radio" name='option' onChange={handelChange} value={data[count].option[2]} />
        <label htmlFor='option'> {data[count].option[2]}</label>
          <br />

          <input type="radio" id='option' onChange={handelChange} name='option' value={data[count].option[3]}/>
          <label htmlFor='option'>  {data[count].option[3]}</label>
          
        </div>

        <button className={style.next} onClick={handelClick}>Next</button>


        </>
      }

      
        </>
    )
}



export {Test}