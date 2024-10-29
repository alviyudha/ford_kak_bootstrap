import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTabProduct } from '../state/tabproduct/action';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickCarouselComp from './SlickCarouselComp';
import LoadingDataComp from './LoadingDataComp';

export default function TabProdukComp() {
  const dispatch = useDispatch();
  const { dataTrim, loading, error } = useSelector(state => state.tabProduct);

  useEffect(() => {
    dispatch(fetchTabProduct());
  }, [dispatch]);

  if (loading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="tabProduct">
      <Tabs defaultActiveKey="Ford Ranger" id="fill-tab-example" className="mb-3 mt-5" fill>
        <Tab eventKey="Ford Ranger" title="Ford Ranger">
          {dataTrim?.Ranger?.length > 0 ? (
            <SlickCarouselComp getDatatypeProf={dataTrim.Ranger} />
          ) : (
            <div>No Ranger data</div>
          )}
        </Tab>
        <Tab eventKey="Ford Everest" title="Ford Everest">
          {dataTrim?.Everest?.length > 0 ? (
            <SlickCarouselComp getDatatypeProf={dataTrim.Everest} />
          ) : (
            <div>No Everest data</div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
}
