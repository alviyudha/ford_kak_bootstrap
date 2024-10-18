import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorModelsComp from '../Components/ColorModelsComp';
import TabCarsDetail from '../Components/TabCarsDetail';
import TabTypeCars from '../Components/TabTypeCars';
import YoutubeFrameComp from '../Components/YoutubeFrameComp';
import api from '../utils/api';
import ModelSpecComp from '../Components/ModelSpecComp';

export default function ModelsDetail() {
  const { linkpage } = useParams(); // Get the linkpage from the route
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getDataDetail(linkpage); // Pass the linkpage to fetch data
        console.log("Fetched data:", response); // Log the data to check it
        setModelData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [linkpage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Destructure the required fields from modelData
  const {
    urlBackgroundImg, // For the background image
    colorsData, // For the color data
    urlYoutube, // For the Youtube link
    minispec, // For the mini specifications
    specification,
    allLinkPage, // For the full specifications
  } = modelData;
console.table('ini mini',allLinkPage)
  return (
    <>
      {/* Background Image */}
      {urlBackgroundImg && (
        <img src={urlBackgroundImg} alt="Model Background" className='img-fluid d-block w-100' />
      )}

  
      <TabTypeCars linkData={allLinkPage} />

      <ColorModelsComp datacolor={colorsData} />
      <YoutubeFrameComp youtubeProps={urlYoutube} />

      <div data-aos="fade-up" data-aos-duration="3000">
        <TabCarsDetail dataminispec={minispec} />
        <ModelSpecComp dataSpecification={specification} />
      </div>
    </>
  );
}
