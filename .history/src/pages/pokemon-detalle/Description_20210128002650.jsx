import React from 'react'

function Description({name, description}) {
    return (
    <div className="description-container test">
        <h2 className='text-white text-center'>POKEMON NAME</h2>
        <br/>
        <p className='text-white text-center'>{description}</p>
        <div className="info-tabla">

        </div>

    </div>
    )
}

export default Description
