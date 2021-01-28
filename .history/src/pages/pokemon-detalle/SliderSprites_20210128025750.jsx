import { Carousel } from 'react-bootstrap'
import React,{useState} from 'react'

function SliderSprites({images, habitat}) {
  console.log('images',habitat.name)
    return (
    <div className="slider-container"  style={{backgroundImage:`url(../../assets/img/habitats..gif)!important` }}>
        <div className="slider-wrapper ">
          <Carousel>
            <Carousel.Item>
                <img className="d-block img-slider"  src={images.front_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.front_shiny} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_shiny} alt="First slide"/>
             </Carousel.Item>
              </Carousel>
        </div>
    </div>
    )
}

export default SliderSprites
