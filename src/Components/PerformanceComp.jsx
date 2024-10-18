/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PerformanceComp({ performanceProps }) {
  

  return (
    <div className='container' id='tabDesign' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      {performanceProps.map((item, index) => (
        <div className="card" style={{ width: '100%' }} key={index}>
          <div className="row g-0">
            {index % 2 === 0 ? (
              // Gambar di sisi kiri
              <>
                <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                  <img src={item.urlImgMiniSpec} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body">
                    <h2 className="card-title text-color-primary">{item.title}</h2>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </>
            ) : (
              // Gambar di sisi kanan
              <>
                <div className="col-md-6 d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
                  <div className="card-body">
                    <h2 className="card-title text-color-primary">{item.title}</h2>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={item.urlImgMiniSpec} className="img-fluid rounded-start" alt="..." />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
