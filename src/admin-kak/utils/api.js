import axiosInstance from "./axios";

const handleRequest = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`Error with API request to ${url}:`, error);
    throw error;
  }
};
const api = (() => {
  const putAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const getAccessToken = () => localStorage.getItem("accessToken");

  const login = async ({ username, password }) => {
    try {
      const response = await handleRequest("post", "/login", {
        username,
        password,
      });
      const { token } = response.data;
      putAccessToken(token);
      return token;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getOwnProfile = async () => {
    try {
      const response = await handleRequest("get", "/me");
      return response.data.user;
    } catch (error) {
      console.error("Failed to get user profile:", error);
      throw error;
    }
  };

  // vehicle
  const getVehiclesData = () => handleRequest("get", "/vehicle");
  const getVehicleById = (id) => handleRequest("get", `/vehicle/${id}`);
  const postVehicle = (vehicleData) =>
    handleRequest("post", "/vehicle", vehicleData);
  const updateVehicle = (id, updateData) =>
    handleRequest("patch", `/vehicle/${id}`, updateData);
  const deleteVehicle = (id) => handleRequest("delete", `/vehicle/${id}`);
  // trim
  const getTrimData = () => handleRequest("get", "/trims");
  const getTrimById = (id) => handleRequest("get", `/trims/${id}`);
  const postTrim = (trimData) => handleRequest("post", "/trims", trimData);
  const updateTrim = (id, updateData) =>
    handleRequest("patch", `/trims/${id}`, updateData);
  const deleteTrim = (id) => handleRequest("delete", `/trims/${id}`);
  // slideHome
  const getSlideHomeData = () => handleRequest("get", "/imgslide");
  const getSlideHomeById = (id) => handleRequest("get", `/imgslide/${id}`);
  const postSlideHome = (SlideHomeData) =>
    handleRequest("post", "/imgslide", SlideHomeData);
  const updateSlideHome = (id, updateData) =>
    handleRequest("patch", `/imgslide/${id}`, updateData);
  const deleteSlideHome = (id) => handleRequest("delete", `/imgslide/${id}`);
  // color
  const getColorData = () => handleRequest("get", "/color");
  const getColorById = (id) => handleRequest("get", `/color/${id}`);
  const postColor = (ColorData) => handleRequest("post", "/color", ColorData);
  const updateColor = (id, updateData) =>
    handleRequest("patch", `/color/${id}`, updateData);
  const deleteColor = (id) => handleRequest("delete", `/color/${id}`);
  const getColorTrim = () => handleRequest("get", `/colortrim`);
  // Dealer
  const getDealerData = () => handleRequest("get", "/dealer");
  const getDealerById = (id) => handleRequest("get", `/dealer/${id}`);
  const postDealer = (DealerData) =>
    handleRequest("post", "/dealer", DealerData);
  const updateDealer = (id, updateData) =>
    handleRequest("patch", `/dealer/${id}`, updateData);
  const deleteDealer = (id) => handleRequest("delete", `/dealer/${id}`);
  // minispec
  const getMiniSpecTrimData = () => handleRequest("get", "/minispectrim");
  const getMiniSpecById = (id) => handleRequest("get", `/minispec/${id}`);
  const postMiniSpec = (MiniSpecData) =>
    handleRequest("post", "/minispec", MiniSpecData);
  const updateMiniSpec = (id, updateData) =>
    handleRequest("patch", `/minispec/${id}`, updateData);
  const deleteMiniSpec = (id) => handleRequest("delete", `/minispec/${id}`);
  // minispec
  const getSpecTrimData = () => handleRequest("get", "/spectrim");
  const getSpecById = (id) => handleRequest("get", `/spec/${id}`);
  const postSpec = (SpecData) => handleRequest("post", "/spec", SpecData);
  const updateSpec = (id, updateData) =>
    handleRequest("patch", `/spec/${id}`, updateData);
  const deleteSpec = (id) => handleRequest("delete", `/spec/${id}`);
  // message
  const getMessageData = () => handleRequest("get", "/messageuser");
  const getMessageById = (id) => handleRequest("get", `/messageuser/${id}`);
  const deleteMessage = (id) => handleRequest("delete", `/messageuser/${id}`);
  // user
  const getUserData = () => handleRequest("get", "/user");
  const getUserById = (cuid) => handleRequest("get", `/user/${cuid}`);
  const deleteUser = (id) => handleRequest("delete", `/user/${id}`);
  const postUser = (UserData) => handleRequest("post", "/user", UserData);
  const updateUser = (cuid, updateData) =>
    handleRequest("patch", `/user/${cuid}`, updateData);
  return {
    putAccessToken,
    getAccessToken,
    login,
    getOwnProfile,
    getVehiclesData,
    postVehicle,
    deleteVehicle,
    getVehicleById,
    updateVehicle,
    getTrimData,
    getTrimById,
    postTrim,
    updateTrim,
    deleteTrim,
    getSlideHomeData,
    getSlideHomeById,
    postSlideHome,
    updateSlideHome,
    deleteSlideHome,
    getColorData,
    getColorById,
    postColor,
    updateColor,
    deleteColor,
    getColorTrim,
    getDealerData,
    getDealerById,
    postDealer,
    updateDealer,
    deleteDealer,
    getMiniSpecTrimData,
    getMiniSpecById,
    postMiniSpec,
    updateMiniSpec,
    deleteMiniSpec,
    getSpecTrimData,
    getSpecById,
    postSpec,
    updateSpec,
    deleteSpec,
    getMessageData,
    getMessageById, 
    deleteMessage,
    getUserData,
getUserById,
deleteUser,
postUser,
updateUser,
  };
})();

export default api;
