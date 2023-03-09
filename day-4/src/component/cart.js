
    import './Cart.css'



const Cart=({item})=>{
console.log(item)
return (
    <div className='card'>
        <img className='image' src={item.image} alt={item.name} />
        <p className='designation'>{item.designation }</p>
        <h1>{item.name}</h1>
        <p>{item.description }</p>
    </div>
)

}

export {Cart};