import { Carousel } from 'bootstrap'
import React,{useState} from 'react'

function SliderSprites({images}) {
  console.log('images',images)
    return (
    <div className="slider-container test">
        <div className="slider-wrapper">
              <Carousel>
              <div className="carousel-item active">
                <img className="d-block img-slider"  src={images.back_default} alt="First slide"/>
              </div>
              <div className="carousel-item active">
                <img className="d-block img-slider"  src={images.front_default} alt="First slide"/>
              </div>
             
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
