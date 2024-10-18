const handleApiError = (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        alert("Unauthorized. Please login.");
      } else if (error.response.status === 500) {
        alert("Server error. Please try again later.");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
      alert("No response from server. Please check your connection.");
    } else {
      console.error("Request setup error:", error.message);
      alert("Request error. Please try again.");
    }
  };

  
  export default handleApiError