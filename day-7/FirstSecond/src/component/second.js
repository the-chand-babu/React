
import './second.css'


const Second =()=>{
    let value = ''
    const handelChange=(e)=>{
       value= e.target.value
    //    console.log(value.length)
       if(value.length === 100){
        alert("Your crossed the limit");
        e.target.value=null;
       }
    }


    return (

        <textarea onChange={handelChange} className='text-area'  cols="50" rows="15"></textarea>




    )
}


export {Second}