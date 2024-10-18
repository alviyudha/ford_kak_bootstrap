import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComp from './src/Components/NavbarComp';
import Footer from './src/Components/Footer';
import SocialShareComp from './src/Components/SocialShareComp';
import LoadingSpinner from './src/Components/LoadingSpinner';
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
        <LoadingSpinner />
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
