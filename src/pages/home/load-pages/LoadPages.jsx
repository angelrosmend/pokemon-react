import React, { useContext } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'

export function PrevPage() {
  const {prevPage, gotoPrevPage} = useContext(PokemonContext)
    return (
    <div className="back">
        { prevPage ? <a onClick={gotoPrevPage} className="btn go-back rounded-pill  text-left ">
           <p className='text-white'><i class="fas fa-arrow-left mr-3">
            </i>ANTERIORES </p>
            </a>: null}
    </div>
    )
}

export function NextPage() {
    const {nextPage, gotoNextPage} = useContext(PokemonContext)
    return (
        <div className="next">
        {nextPage ? <a onClick={gotoNextPage} className="btn go-next rounded-pill ">
          <p className='text-white'>SIGUIENTES  <i class="fas fa-arrow-right mr-3">
           </i></p>
           </a>:null}
         </div>
    )
}


