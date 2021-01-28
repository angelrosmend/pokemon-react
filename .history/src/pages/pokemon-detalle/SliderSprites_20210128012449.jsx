import { Carousel } from 'react-bootstrap'
import React,{useState} from 'react'

function SliderSprites({images}) {
  console.log('images',images)
    return (
    <div className="slider-container test">
        <div className="slider-wrapper">
            <Carousel>
            <Carousel.Item>
                <img className="d-block img-slider"  src={images.front_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_default} alt="First slide"/>
             </Carousel.Item>
              </Carousel>
        </div>
    </div>
    )
}

export default SliderSprites
