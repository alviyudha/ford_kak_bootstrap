/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'


export default function SafetyComp({safetyProps}) {
  
  return (
    <>
    <div className="row p-5" >
        {safetyProps.map((image, index) => (
          <div key={index} className='col-md-4' data-aos="fade-left"
          data-aos-duration="500">
            <img src={image.urlImgMiniSpec} alt={`Ford Safety ${index}`} className='img-fluid' />
          </div>
        ))}
      </div>
    </>
  )
}
