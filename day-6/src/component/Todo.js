import './Todo.css' 

import {useState} from 'react'


const Todo=()=>{

    const [todo, setTodo]= useState([])
    const [count,setCount]= useState(0);
    
    

    let value ={};
    const handelinputChange=(e)=>{
            value.name = e.target.value;
            value.flag=false;
            
    }

    const handelClick=()=>{
        if(value.length === 0){
            alert("please fill the input")
        }else{
            setCount(count+1);
            setTodo([...todo,value ])
        }
        console.log(todo)

       
    }

    const deleteTodo=(index)=>{
        if(todo[index].flag===true){
            console.log(todo[index].flag)
            todo.splice(index,1);
            console.log([...todo])
            setTodo([...todo]);
            
           
        }else{

            todo.splice(index,1);
            setTodo(todo);
            setCount(count-1)

        }

           

        

            

    }

   
            
    const handelCompltetbtn=(index)=>{
        
       
        const arr = todo.map((ele,inde)=>{
                if(inde=== index){
                    console.log(ele)
                    return {...ele,flag:true};
                }
                else{
                    return ele;
                }
        })
        setTodo(arr)
    
    setCount(count-1)

   

        
    }

return (
    <div className="todo-box">

        <h2>Pending tasks({count})</h2>

        {todo.map((item,index)=>{
            return (
                
           <ul className='list'  key={index   }>
            {
                item.flag?<li style={{textDecoration: 'line-through'}}>{item.name}</li>:<li >{item.name}</li>
                // console.log(item.flag)
            }
            
                {console.log(item.flag)}
             
        
        
            <div className='btn-div'>
            <button onClick={()=> handelCompltetbtn(index)} className='complete-btn'>complete</button>
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