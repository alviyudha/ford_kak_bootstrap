import { useEffect } from 'react';
import TabProdukComp from '../Components/TabProdukComp';
import SlideImgComp from '../Components/SlideImgComp';

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <>
          <SlideImgComp />
          <section className="section-custom bg-white" id="section-produk">
            <h2 className="text-center" data-aos="fade-right" data-aos-duration="1000">
              Discover The Next - Generation
            </h2>
            <p className="text-center" data-aos="fade-left" data-aos-duration="1000">
              Conquering the passion has come to the next level with wilder performance built completely extraordinary
              under The Next Big Thing challenge
            </p>
            <TabProdukComp />
          </section>
        </>
      
    </>
  );
}
