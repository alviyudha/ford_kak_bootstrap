const api = (() => {
    const BASE_URL = import.meta.env.VITE_APP_BASE_API;
  
    const putAccessToken = (token) => {
      // logic for setting access token
    };
  
    const getAccessToken = () => {
      // logic for getting access token
    };
  
    const login = async (credentials) => {
      // logic for login
    };
  
    const getOwnProfile = async () => {
      // logic for fetching user profile
    };
  
   
  
    return {
      putAccessToken,
      getAccessToken,
      login,
      getOwnProfile,
    };
  })();
  
  export default api;
  