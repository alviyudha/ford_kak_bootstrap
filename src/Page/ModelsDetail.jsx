import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchModelDetail } from "../state/modeldetail/action";
import ColorModelsComp from "../Components/ColorModelsComp";
import TabCarsDetail from "../Components/TabCarsDetail";
import TabTypeCars from "../Components/TabTypeCars";
import YoutubeFrameComp from "../Components/YoutubeFrameComp";
import ModelSpecComp from "../Components/ModelSpecComp";
import LoadingDataComp from "../Components/LoadingDataComp";

export default function ModelsDetail() {
  const { linkpage } = useParams(); 
  const dispatch = useDispatch();
  
  const { modelData, loading, error } = useSelector((state) => state.modelDetail); // Sesuaikan dengan reducer di store

  useEffect(() => {
    dispatch(fetchModelDetail(linkpage));
  }, [dispatch, linkpage]);

  if (loading) return <LoadingDataComp />;

  if (error) return <p>Error: {error}</p>;

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
