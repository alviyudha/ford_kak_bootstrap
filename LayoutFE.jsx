import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComp from './src/Components/NavbarComp';
import Footer from './src/Components/Footer';
import SocialShareComp from './src/Components/SocialShareComp';
import LoadingDataComp from './src/Components/LoadingDataComp';
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
