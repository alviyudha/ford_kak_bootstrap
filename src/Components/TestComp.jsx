import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card data-aos="fade-up" data-aos-duration="1000">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card data-aos="fade-up" data-aos-duration="1000">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card data-aos="fade-up" data-aos-duration="1000">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card data-aos="fade-up" data-aos-duration="1000">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
