/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function TabDealerComp({ dataDealer }) {
  // Make sure dataDealer is an array
  if (!dataDealer || !Array.isArray(dataDealer)) {
    return <div>No dealer data available.</div>;
  }

  return (
    <>
      <Tab.Container defaultActiveKey="all-tab">
        <nav id="nav-tab-dealer">
          <Nav variant="tabs" className="tabs-type-cars justify-content-center sticky-top z-3">
            <Nav.Item>
              <Nav.Link eventKey="all-tab" className='mb-1'>All</Nav.Link>
            </Nav.Item>
            {/* Add additional Nav.Item here for other regions if needed */}
          </Nav>
        </nav>
        <div id="nav-dealer-content">
          <Tab.Content>
            <Tab.Pane eventKey="all-tab" className='p-5'>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {dataDealer.map((dealer, index) => (
                  <div className="col" key={index} id='cardDealer'>
                    <div className="card h-100">
                      <img src={dealer.urlImageDealer} className="card-img-top" alt={dealer.name} />
                      <div className="card-body">
                        <h5 className="card-title">{dealer.name}</h5>
                        <p className="card-text">{dealer.address}</p>
                      </div>
                      <div className="card-footer">
                        <a href={`https://wa.me/${dealer.whatsapp}`} target='_blank' rel="noreferrer">
                          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        </a>
                        {dealer.urlInstagram && (
                          <a href={dealer.urlInstagram} target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                          </a>
                        )}
                        <a href={dealer.urlMaps} target='_blank' rel="noreferrer">
                          <FontAwesomeIcon icon={faLocationArrow} size="xl" />
                        </a>
                        <a href={dealer.urlFacebook} target='_blank' rel="noreferrer">
                          <FontAwesomeIcon icon={faFacebook} size="xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            {/* Add more Tab.Pane for other regions if needed */}
          </Tab.Content>
        </div>
      </Tab.Container>
    </>
  );
}
