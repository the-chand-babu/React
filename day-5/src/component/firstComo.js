import {useState} from 'react'



const First=()=>{
    const [myArray,setMyArray]=useState([])
    let value = ""
    const handelChange=(e)=>{
        value=e.target.value;
        // console.log(value)
    }

    const handelClick=()=>{
        setMyArray([...myArray,value])
        // console.log(myArray)
        
    }

    console.log(value)
    return (
        <>
        
        <input onChange={handelChange} type="text"  />
        <button onClick={handelClick}>Add</button>
        <br />

        {myArray.map((item,index)=> <p style={{fontSize:"20px",fontWeight:"bold"}} key={index}>{item}</p>)}
        
        
        
        
        </>
    )
}

export {First};