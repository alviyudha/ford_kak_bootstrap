import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColorModelsComp from "../Components/ColorModelsComp";
import TabCarsDetail from "../Components/TabCarsDetail";
import TabTypeCars from "../Components/TabTypeCars";
import YoutubeFrameComp from "../Components/YoutubeFrameComp";
import api from "../utils/api";
import ModelSpecComp from "../Components/ModelSpecComp";
import LoadingDataComp from "../Components/LoadingDataComp";

export default function ModelsDetail() {
  const { linkpage } = useParams(); 
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getDataDetail(linkpage);
        console.log("Fetched data:", response);
        setModelData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [linkpage]);

  if (loading) return <LoadingDataComp />;

  if (error) return <p>Error: {error.message}</p>;

  if (!modelData) return <p>No data available</p>;
  const {
    urlBackgroundImg,
    colorsData,
    urlYoutube,
    minispec,
    specification,
    allLinkPage,
  } = modelData;

  return (
    <>
      {urlBackgroundImg && (
        <img
          src={urlBackgroundImg}
          alt="Model Background"
          className="img-fluid d-block w-100"
        />
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
