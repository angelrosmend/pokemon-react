import React,{useState} from 'react'
import { ball } from '../../assets/img'

function SliderSprites({images}) {
  console.log('images',images)
    return (
    <div className="slider-container test">
        <div className="slider-wrapper test">
        <div id="carouselProductos" className="carousel slide" data-ride="true">
            <div className="carousel-inner">
              
            
            <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='danger'/>
              
             
            </div>
            <a className="carousel-control-prev" href="#carouselProductos" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselProductos" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
    )
}

export default SliderSprites
