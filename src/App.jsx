import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Home from './Page/Home'
import ErrorPage from './Page/ErrorPage'
import Models from './Page/Models'
import ModelsDetail from './Page/ModelsDetail'
import LayoutFE from '../LayoutFE'
import Dealer from './Page/Dealer'
import BookingServices from './Page/BookingServices'
import BookingTestDrive from './Page/BookingTestDrive'

function App() {
  useEffect(() => {
    AOS.init();
    const refreshAOS = () => {
      AOS.refreshHard();
    };

    const tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');

    tabElements.forEach((tabElement) => {
      tabElement.addEventListener('hidden.bs.tab', refreshAOS);
      tabElement.addEventListener('shown.bs.tab', refreshAOS);
    });

    return () => {
      tabElements.forEach((tabElement) => {
        tabElement.removeEventListener('hidden.bs.tab', refreshAOS);
        tabElement.removeEventListener('shown.bs.tab', refreshAOS);
      });
    };
  }, []);
  return (
    <>
   <Router>
        <Routes>
        <Route element={<LayoutFE />}> 
        <Route path='/' element={<Home />} />
        <Route path='/dealer' element={<Dealer />} />
        <Route path='/Models' element={<Models />} />
        <Route path='/model/details/:linkpage' element={<ModelsDetail />} />
        <Route path='/booking-services' element={<BookingServices />} />
        <Route path='/test-drive' element={<BookingTestDrive />} />
        <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>
     </Router>
    </>
  )
}

export default App
