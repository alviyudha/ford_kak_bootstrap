import axios from 'axios';

const api = (() => {

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json"
    },
  });

  const getImgSlideHome = async () => {
    try {
      const response = await axiosInstance.get(`/imgslide`);
      return response.data;
    } catch (error) {
      console.error("Error fetching image slides:", error);
      throw error;
    }
  };

  const getTrim = async () => {
    try {
      const response = await axiosInstance.get(`/trims`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Trim data:", error);
      throw error;
    }
  };

  const getDealer = async () => {
    try {
      const response = await axiosInstance.get(`/dealer`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Dealer data:", error);
      throw error;
    }
  };

  const inputMessage = async (messageData) => {
    try {
      const response = await axiosInstance.post(`/messageuser`, messageData);
      return response.data;
    } catch (error) {
      console.error("Error sending message data:", error);
      throw error;
    }
  };

  const getDataModel = async () => {
    try {
      const response = await axiosInstance.get(`/allmodel`);
      return response.data;
    } catch (error) {
      console.error("Error fetching model Data:", error);
      throw error;
    }
  };

  const getDataDetail = async (linkpage) => {
    try {
      const response = await axiosInstance.get(`/datadetail/${linkpage}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching datadetail:", error);
      throw error;
    }
  };

  const getDataTrimGroup = async () => {
    try {
      const response = await axiosInstance.get('/trimgroup');
      return response.data;
    } catch (error) {
      console.error("Error fetching trim group:", error);
      throw error;
    }
  };

  const getDropdownData = async () => {
    try {
      const response = await axiosInstance.get(`/dropdowndata`);
      return response.data;
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
      throw error;
    }
  };

  return {
    getImgSlideHome,
    getTrim,
    getDealer,
    inputMessage,
    getDataModel,
    getDataDetail,
    getDataTrimGroup,
    getDropdownData,
  };
})();

export default api;
