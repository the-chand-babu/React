import {useState} from 'react'

import './First.css'
const First =()=>{

    let arr=['https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
            'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            'https://thumbs.dreamstime.com/b/panorama-view-sea-colorful-sky-cloud-bright-full-moon-seascape-to-night-serenity-nature-background-outdoor-131503361.jpg',
            'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg'

]

    const [count, setCount]= useState(0)



    const handelChange=()=>{
        if(count === arr.length-1){
            setCount(0);
            return;
        }

        setCount(count+1)
    }


    return (
        <div className="div">

        <div className='img-div'>
            <img src={arr[count]} alt="" />
        </div>
        <div className='btn-div'>
            <button  onClick={handelChange}>Change Pic</button>
        </div>
        </div>
    )
}

export {First}