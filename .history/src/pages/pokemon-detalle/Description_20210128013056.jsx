import React from 'react'

function Description({name, description}) {
    return (
    <div className="description-container">
        <h2 className='text-white text-center'>{name}</h2>
        <br/>
      
        <div className="info-tabla">
        <p className='text-white text-center'>{description.flavor_text}</p>

        </div>

    </div>
    )
}

export default Description
