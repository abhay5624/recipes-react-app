import React from 'react'

const Recipies = ({title,Image, calories}) => {
    return (
        <div>
           <h1>{title}</h1>
           <p>{calories}</p>
           <img src={Image} alt="" />
        
        </div>
    )
}

export default Recipies
