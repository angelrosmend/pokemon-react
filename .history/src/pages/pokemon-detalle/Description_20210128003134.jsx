import React from 'react'

function Description({name, description}) {
    return (
    <div className="description-container test">
        <h2 className='text-white text-center'>{name}</h2>
        <br/>
        <p className='text-white text-center'>{description.flavor_text}</p>
        <div className="info-tabla">

        </div>

    </div>
    )
}

export default Description
