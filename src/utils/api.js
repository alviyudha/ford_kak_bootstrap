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
  
    const getImgSlideHome = async () => {
      try {
        const response = await fetch(`${BASE_URL}/imgslide`);
        if (!response.ok) {
          throw new Error("Failed to fetch image slides");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching image slides:", error);
        throw error;
      }
    };
    const getTrim = async () => {
      try {
        const response = await fetch(`${BASE_URL}/trims`);
        if (!response.ok) {
          throw new Error("Failed to fetch Trim data");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching Trim data:", error);
        throw error;
      }
    };
    const getDealer = async () => {
      try {
        const response = await fetch(`${BASE_URL}/dealer`);
        if (!response.ok) {
          throw new Error("Failed to fetch Trim data");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching Trim data:", error);
        throw error;
      }
    };
    const inputMessage = async (messageData) => {
      try {
        const response = await fetch(`${BASE_URL}/messageuser`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(messageData), 
        });
    
        if (!response.ok) {
          throw new Error("Failed to send message data");
        }
    
        return await response.json(); 
      } catch (error) {
        console.error("Error sending message data:", error);
        throw error; 
      }
    };
    
    // joindata
    const getDataModel = async () => {
      try {
        const response = await fetch(`${BASE_URL}/allmodel`);
        if (!response.ok) {
          throw new Error("Failed to fetch Model Data");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching model Data:", error);
        throw error;
      }
    };
    const getDataDetail = async (linkpage) => {
      try {
        const response = await fetch(`${BASE_URL}/datadetail/${linkpage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch datadetail");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching datadetail:", error);
        throw error;
      }
    };
    const getDataTrimGroup = async () => {
      try {
        const response = await fetch(`${BASE_URL}/trimgroup`);
        if (!response.ok) {
          throw new Error("Failed to fetch trim group");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching trim group:", error);
        throw error;
      }
    };
    const getDropdownData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/dropdowndata`);
        if (!response.ok) {
          throw new Error("Failed to fetch trim group");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching trim group:", error);
        throw error;
      }
    };
  
    return {
      putAccessToken,
      getAccessToken,
      login,
      getOwnProfile,
      getImgSlideHome,
      getDataModel,
      getDataDetail,
      getTrim,
      getDataTrimGroup,
      getDealer,
      getDropdownData,
      inputMessage
    };
  })();
  
  export default api;
  