import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ColorModelsComp({ datacolor }) {
  // Extract initial data from the first color item
  const initialColor = datacolor[0];
  const [currentImage, setCurrentImage] = useState(initialColor.urlcolorsImage);
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState(initialColor.backgroundColor);
  const [currentDescColor, setCurrentDescColor] = useState(initialColor.descColor);
  const [currentTitle, setCurrentTitle] = useState(initialColor.title);
  const [currentText, setCurrentText] = useState(initialColor.text);

  const changeImage = (newImage, newBackgroundColor, newDescColor, newTitle, newText) => {
    setCurrentImage(newImage);
    setCurrentBackgroundColor(newBackgroundColor);
    setCurrentDescColor(newDescColor);
    setCurrentTitle(newTitle);
    setCurrentText(newText);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="pageColorCars" className="text-center mt-3">
      <div className='bg-white p-5'>
        <div className='col-md-6 offset-md-3'>
          <h3 className='text-color-primary fw-semibold text-capitalize'>{currentTitle}</h3>
          <p>{currentText}</p>
        </div>
      </div>
      <div className="row" style={{ height: '500px', background: `linear-gradient(0deg, ${currentBackgroundColor} 35%, rgba(255,255,255,1) 80%)` }}>
        <div className="col-sm-8 bg-car-view mt-3">
          <img 
            src={currentImage} 
            alt="Color-selection" 
            className="img-fluid" 
            style={{ width: '70%' }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <div className="col-sm-4">
          <div className='button-container pt-5' style={{ zIndex: 1005 }}>
            {datacolor.map((color, index) => (
              <button
                key={index}
                onClick={() => changeImage(
                  color.urlcolorsImage, 
                  color.backgroundColor, 
                  color.descColor,
                  color.title,
                  color.text
                )}
                className="p-4 rounded-circle btn-colors m-1"
                style={{ background: color.backgroundColor }}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            ))}
            <p className='mt-5 fs-3 descColor text-white text-opacity-25'>{currentDescColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
