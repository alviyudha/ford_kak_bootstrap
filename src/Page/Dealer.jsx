import  { useEffect, useState } from 'react';
import TabDealerComp from '../Components/TabDealerComp';
import api from '../utils/api';
import LoadingDataComp from '../Components/LoadingDataComp';

export default function Dealer() {
  const [dealer, setDealer] = useState()
  useEffect(() => {
    const fetchData = async () =>{
    try {
      const response = await api.getDealer()
      setDealer(response)
      // console.log("Dealer data:", JSON.stringify(response, null, 2));
    } catch (error) {
      console.error("Error fetching Dealer Data:", error)
    }
    }
    fetchData()
  },[])
  if (!dealer) {
    return <LoadingDataComp />;
  }
  return (
    <>
      <div id="Dealer">
        <img src="images/FORD-Dealer.jpg" alt="Ford Dealer" className="img-fluid p-5 bg-white" />
        <div className="dealer bg-white p-3 text-color-primary">
          <h1 className="text-center">Dealer Location</h1>
          <TabDealerComp dataDealer={dealer} />
        </div>
        <div className="gMaps text-center mt-3 bg-white p-5"></div>
      </div>
    </>
  );
}
