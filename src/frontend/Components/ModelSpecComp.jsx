/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ModelSpecComp({dataSpecification}) {

    
  return (
    <div className='bg-white text-center mt-5 p-5' id='modelSpec'>
        <h3 className='text-color-primary'>Model Specification</h3>
        <h4 className='text-color-secondary'>Next Generation Ranger Raptor</h4>

        <section className="section-custom" id="section-secvehicles">

  <div className="container">
  
    <nav>
      <div className="nav nav-tabs box-tab-secvehicles justify-content-center" id="nav-tab" role="tablist">
        <button className="nav-link nav-link-sec active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">Engine</button>
        <button className="nav-link nav-link-sec" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Transmission & chassis</button>
        <button className="nav-link nav-link-sec" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">Brake Control</button>
        <button className="nav-link nav-link-sec" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4" type="button" role="tab" aria-controls="nav-4" aria-selected="false">Exterior Feature</button>
        <button className="nav-link nav-link-sec" id="nav-5-tab" data-bs-toggle="tab" data-bs-target="#nav-5" type="button" role="tab" aria-controls="nav-5" aria-selected="false">Interior Feature</button>
        <button className="nav-link nav-link-sec" id="nav-6-tab" data-bs-toggle="tab" data-bs-target="#nav-6" type="button" role="tab" aria-controls="nav-6" aria-selected="false">Safety & Security</button>
        <button className="nav-link nav-link-sec" id="nav-7-tab" data-bs-toggle="tab" data-bs-target="#nav-7" type="button" role="tab" aria-controls="nav-7" aria-selected="false">Dimension</button>
        
      </div>
    </nav>
    <div className="tab-content text-start " id="nav-tabContent">

    <div className="tab-pane ps-2 fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab" >
    {/* content */}
    {dataSpecification.engine.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong><strong>{item.title}</strong></strong></p>
        </div>
        <div className="col-md-9 col-sm-2 ">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab" >
      {/* content */}
      {dataSpecification.transmission.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab" >
      {/* content */}
      {dataSpecification.brakeControl.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab" >
      {/* content */}
      {dataSpecification.exteriorFeature.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab" >
      {/* content */}
      {dataSpecification.interiorFeature.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-6-tab" >
      {/* content */}
      {dataSpecification.safetySecurity.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-7" role="tabpanel" aria-labelledby="nav-7-tab" >
      {/* content */}
      {dataSpecification.dimension.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    </div>
  </div>    
</section>

    </div>
  )
}
