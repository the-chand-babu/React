
import { useState } from "react"

const Second=()=>{

    const [count, setCount]=useState(0);

    const handelIncrease=()=>{
        setCount(count+1)
    }

    const handelDecrease=()=>{
        setCount(count-1);
    }
    return (

        < >
        <h1 style={{marginLeft:'5rem',color:"red"}}>{count}</h1>
        
        <button onClick={handelIncrease}>Increase Count</button>
        <button onClick={handelDecrease}>Decrease Count</button>
        </>
    )
}


export {Second};