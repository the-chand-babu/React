
import './heading.css'


const Heading =(props)=>{
    console.log(props)
    return (

        <div>
            <h1 className="heading">Welcome!</h1>
            <p className="login-name">{props.name}</p>
        </div>

    )
}

export {Heading}