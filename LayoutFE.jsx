import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './src/frontend/Components/Footer';
import SocialShareComp from './src/frontend/Components/SocialShareComp';
import LoadingDataComp from './src/frontend/Components/LoadingDataComp';
import NavbarComp from './src/frontend/Components/NavbarComp';
const LayoutFE = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingDataComp />
      ) : (
        <div>
          <NavbarComp />
          <SocialShareComp />
          <main> 
            <Outlet />
          </main>
          {/* <FooterComp /> */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LayoutFE;
