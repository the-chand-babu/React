import './Todo.css' 

import {useState,useRef} from 'react'

const Todo=()=>{

    const [todo, setTodo]= useState([])
    const [count,setCount]= useState(0);
    const referenceS=useRef(null);
    

    let value ='';
    const handelinputChange=(e)=>{
            value = e.target.value;
            
    }

    const handelClick=()=>{
        if(value.length === 0){
            alert("please fill the input")
        }else{
            setCount(count+1);
            setTodo([...todo,value])
        }

       
    }


    const deleteTodo=(index)=>{
            todo.splice(index,1);
            setTodo(todo);
            if(count !== 0){
            setCount(count-1);

            }

    }

   
            
    const handelCompltetbtn=()=>{
        referenceS.current.className='strike'
        // console.log(referenceS.current)
        if(count !== 0){
        setCount(count-1)

        }
    }

return (
    <div className="todo-box">

        <h2>Pending tasks({count})</h2>

        {todo.map((item,index)=>{
            return (
           <ul className='list'  key={index   }>
            
                
             <li ref={referenceS}>{item}</li>
        
        
            <div className='btn-div'>
            <button onClick={handelCompltetbtn} className='complete-btn'>complete</button>
            <button onClick={()=>deleteTodo(index)} className='delete-btn'>x</button>
            </div>
           
           </ul>
           )
            
        })}





        <input onChange={handelinputChange} className='input' type="text" />
        {/* <br/> */}
        <button onClick={handelClick}>Submit</button>


    </div>
)


}



export {Todo}