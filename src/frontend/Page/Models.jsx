import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicleData } from '../state/model/action';
import LoadingDataComp from '../Components/LoadingDataComp';
import { Link } from 'react-router-dom';

export default function Models() {
  const dispatch = useDispatch();
  const { vehicleData, loading, error } = useSelector((state) => state.model); // Sesuaikan dengan reducer di store

  const clickToZeroPosition = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchVehicleData());
  }, [dispatch]);

  if (loading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="section-custom" style={{ marginTop: '30px' }} id="section-secvehicles">
      <div className="container">
        <nav>
          <div className="nav nav-tabs box-tab-secvehicles" id="nav-tab" role="tablist">
            {vehicleData.map((vehicleType, index) => (
              <button
                key={index}
                className={`nav-link nav-link-sec ${index === 0 ? 'active' : ''}`}
                id={`nav-${vehicleType.model}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-${vehicleType.model}`}
                type="button"
                role="tab"
                aria-controls={`nav-${vehicleType.model}`}
                aria-selected={index === 0 ? 'true' : 'false'}
              >
                {vehicleType.model}
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {vehicleData.map((vehicleType, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`nav-${vehicleType.model}`}
              role="tabpanel"
              aria-labelledby={`nav-${vehicleType.model}-tab`}
            >
              <div className="card_vehicles justify-content-between">
                <div className="row">
                  {vehicleType.data.map((model, modelIndex) => (
                    <div key={modelIndex} className="col-md-4 card-vehicles">
                      <Link to={`/model/details/${model.link}`} className="vehicle-link" onClick={clickToZeroPosition}>
                        <img src={model.imgView} className="card-img-top" alt={model.name} />
                      </Link>
                      <div className="card-body">
                        <p className="card-text text-center vehicles-card-caption text-uppercase">{model.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
