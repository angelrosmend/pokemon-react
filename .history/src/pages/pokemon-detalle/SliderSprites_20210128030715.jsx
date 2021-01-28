import { Carousel } from 'react-bootstrap'
import React,{useState} from 'react'

function SliderSprites({images, habitat}) {

    return (
    <div className="slider-container"  style={{backgroundImage:`url(/img/habitats/${habitat.name}.gif)`,
                                                }}>
        <div className="slider-wrapper " style={{ba}}>
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
