 import './sqaure.css'
 const Sqaure=(props)=>{
    // console.log(props.onclick)
    
    return (
        <div 
        onClick={props.onclick}
        className='sqaure'>
            <h2>{props.value}</h2>
        </div>
    )
 }

export {Sqaure}