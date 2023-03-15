
    import './input.css'

const Input =(props)=>{
    console.log(props)

return (

    <div>
        <label htmlFor="">{props.name}</label>
        <br />
        <input className='input' type="text" placeholder={props.placeholder} />
    </div>


)

}

export {Input}