import { useState, useEffect } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function SocialShareComp() {
  const [ setShowScrollButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section id="fixed-social">
        <ul className="social">
          <li>
            <a href="#" onClick={scrollToTop}>
              <span>Scroll up</span>
              <span><FontAwesomeIcon icon={faArrowUp} size="2xl" /></span>
            </a>
          </li>
          <li><a href="https://instagram.com/ford.indonesia.co.id?igshid=NGVhN2U2NjQ0Yg==" target='_blank' rel="noreferrer"><span>Instagram</span><span><FontAwesomeIcon icon={faInstagram} size="2xl" /></span></a></li>
          <li><a href="https://wa.me/+6281230002453" target='_blank' rel="noreferrer"><span>Whastapp</span><span><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></span></a></li>
          <li><Link to="/booking-services" ><span>Service</span><span><FontAwesomeIcon icon={faGear} size="2xl" /></span></Link></li>
          <li><Link to="/test-drive" ><span>Test Drive</span><span><FontAwesomeIcon icon={faRoadCircleCheck} size="2xl"/></span></Link></li>
        </ul>
      </section>
    </>
  )
}
