import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TabDealerComp from '../Components/TabDealerComp';
import LoadingDataComp from '../Components/LoadingDataComp';
import { fetchDealerData } from '../state/dealer/action';

export default function Dealer() {
  const dispatch = useDispatch();
  const { dealerData, loading, error } = useSelector(state => state.dealer);

  useEffect(() => {
    dispatch(fetchDealerData());
  }, [dispatch]);

  if (loading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="Dealer">
      <img src="images/FORD-Dealer.jpg" alt="Ford Dealer" className="img-fluid p-5 bg-white" />
      <div className="dealer bg-white p-3 text-color-primary">
        <h1 className="text-center">Dealer Location</h1>
        <TabDealerComp dataDealer={dealerData} />
      </div>
      <div className="gMaps text-center mt-3 bg-white p-5"></div>
    </div>
  );
}
