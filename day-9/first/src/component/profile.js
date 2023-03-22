import './profile.css'

const Profile=({user})=>{
    const {name,image,exp,designation} =user;
    // console.log(name,exp,designation)
    return (
        <div className='profile'>
        <img src={image} alt="" />
        <h6>{name}</h6>
        <p>{designation}</p>
        <span>{exp}</span>
        </div>
    )
}


export {Profile}