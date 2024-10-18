/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickCarouselComp from './SlickCarouselComp';
import api from '../utils/api';
import LoadingDataComp from './LoadingDataComp';

export default function TabProdukComp() {
  const [dataTrim, setDataTrim] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getDataTrimGroup();
        setDataTrim(data); 
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching trim group:", err);
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!isLoading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <div id="tabProduct" >
      <Tabs
        defaultActiveKey="Ford Ranger"
        id="fill-tab-example"
        className="mb-3 mt-5"
        fill
      >
        <Tab eventKey="Ford Ranger" title="Ford Ranger">
          <SlickCarouselComp getDatatypeProf={dataTrim?.Ranger} />
        </Tab>
        <Tab eventKey="Ford Everest" title="Ford Everest">
          <SlickCarouselComp getDatatypeProf={dataTrim?.Everest} />
        </Tab>
      </Tabs>
    </div>
  );
}
