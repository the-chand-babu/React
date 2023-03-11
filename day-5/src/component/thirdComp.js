
import { useState } from "react";



const Third =()=>{

const [name,setName]=useState('Amit')


    const handelChangeName=()=>{
        name==="Amit"?setName("Ranjan"):setName("Amit");
    }


return (

<>

<h1>{`My name is ${name}`}</h1>
    <button onClick={handelChangeName}>Change Name</button>


</>



)


}


export {Third}
