import React, { useContext } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'

export function PrevPage() {
  const {prevPage, gotoPrevPage, text, language} = useContext(PokemonContext)
   let textPrev = text.back.find(item => item.id === language).name
    return (
    <div className="back">
        { prevPage ? <a onClick={gotoPrevPage} className="btn go-back rounded-pill  text-left ">
           <p className='text-white'><i className="fas fa-arrow-left mr-3"> 
            </i>{textPrev}</p>
            </a>: null}
    </div>
    )
}

export function NextPage() {
    const {nextPage, gotoNextPage, text, language} = useContext(PokemonContext)
    let textNext = text.next.find(item => item.id === language).name
    return (
        <div className="next">
        {nextPage ? <a onClick={gotoNextPage} className="btn go-next rounded-pill ">
          <p className='text-white'>{textNext} <i className="fas fa-arrow-right mr-3">
           </i></p>
           </a>:null}
         </div>
    )
}


