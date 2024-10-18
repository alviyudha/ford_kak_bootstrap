/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function SlickCarouselComp({getDatatypeProf}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplaySpeed: 2000,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
     beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      
      {
        breakpoint: 600 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  const getSlideDataCars = getDatatypeProf;

  if (getSlideDataCars.length === 3) {
    const duplicatedImage = { ...getSlideDataCars[0] }; 
    getSlideDataCars.push(duplicatedImage);
  }else if (getSlideDataCars.length === 2) {
    const duplicatedImages = [...getSlideDataCars, ...getSlideDataCars];
    getSlideDataCars.push(...duplicatedImages);
  }else if (getSlideDataCars.length === 1) {
    const duplicatedImages = [...getSlideDataCars, ...getSlideDataCars];
    getSlideDataCars.push(...duplicatedImages);
  }
  return (
    <div id='slideCars'>
    <div className="container p-5">
      <Slider {...settings}>
      {getSlideDataCars.map((slide, index) => (
  <div key={index}>
    <img src={slide.urlImgView} alt="" className="p-3" />
  </div>
))}
      </Slider>
    </div>
    <div className="container caption-container" >
      <h4 className='mb-4 text-color-primary text-capitalize'>{getSlideDataCars[currentSlide].trim}</h4>
      <div className="row text-secondary p-4 shadow">
        <div className="col-lg-4 col-md-12 ">
          <p className='mb-3'>Harga Mulai</p>
          <p className='mb-2 text-color-primary fs-5 fw-bold'>IDR {getSlideDataCars[currentSlide].otrPrice}</p>
          <p className='mb-1'>Otr: {getSlideDataCars[currentSlide].otrArea}</p>
        </div>
        <div className="col-lg-4 col-md-12">
          <p className='mb-3'>Highlighted Specifications</p>
          <ul className=' fw-medium'>
            {/* {getSlideDataCars.itemSpec.map((item, index) =>(
              <li key={index}>{item}</li>

            ))} */}
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 d-flex flex-column">
  <Link to={`/model/details/${getSlideDataCars[currentSlide].linkPage}`} className='btn shadow mb-5'>Selengkapnya</Link>
  <a className='btn shadow' href={getSlideDataCars[currentSlide].brochure} download rel="noreferrer">Brochure</a>
</div>
      </div>

    </div>
  </div>
  )
}
