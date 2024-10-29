export default function DesignComp({designDataProps}) {

    
  return (
    <div className='container' id='tabDesign'>
    {designDataProps.map((item, index) => (
      <div className="card" style={{ width: '100%' }} key={index}>
        <div className="row g-0">
          {index % 2 === 0 ? (
            // Gambar di sisi kiri
            <>
              <div className="col-md-6"  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                <img src={item.urlImgMiniSpec} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h1 className="card-title text-color-primary">{item.title}</h1>
                  <p className="card-text text-color-gray">{item.text}</p>
                </div>
              </div>
            </>
          ) : (
            // Gambar di sisi kanan
            <>
              <div className="col-md-6 d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
                <div className="card-body">
                  <h1 className="card-title text-color-primary">{item.title}</h1>
                  <p className="card-text text-color-gray">{item.text}</p>
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
  )
}
