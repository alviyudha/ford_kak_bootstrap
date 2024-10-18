/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComp({imagesProf}) {
  return (
    <div id='carouselHome'>
       <Carousel fade>
      {imagesProf.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.caption.title}</h3>
            <p>{image.caption.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}
