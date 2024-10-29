import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../../component/ToastComp";
import { useNavigate } from "react-router-dom";

function FormEditSlideHome() {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const response = await api.getSlideHomeById(id);
        setCurrentSlide(response);
      } catch (error) {
        setToastMessage("Failed to fetch slide data.", error.message);
        setToastVisible(true);
      }
    };

    fetchSlide();
  }, [id]);

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newImage) {
      setToastMessage("Please select a new image to upload.");
      setToastVisible(true);
      return;
    }

    const formData = new FormData();
    formData.append("image", newImage);

    try {
      setLoading(true);
      await api.updateSlideHome(id, formData);
      setLoading(false);
      navigate("/admin-ford/slidehome");
    } catch (error) {
      setLoading(false);
      setToastMessage(
        error.response ? error.response.data.msg : "Failed to update slide."
      );
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  if (!currentSlide) return <div>Loading current slide data...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit Slide</h2>

      <form onSubmit={handleSubmit}>
        {/* Display current image */}
        <div className="mb-3">
          <label className="form-label">Current Slide Image</label>
          <div>
            <img
              src={currentSlide.urlImage}
              alt="Current Slide"
              style={{ width: "150px", height: "auto" }}
              className="img-thumbnail"
            />
          </div>
        </div>

        {/* Input for new image */}
        <div className="mb-3">
          <label htmlFor="newImage" className="form-label">
            Upload New Image (Max: 5MB, PNG/JPG/JPEG)
          </label>
          <input
            type="file"
            className="form-control"
            id="newImage"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Slide"}
        </button>
      </form>

      {/* Toast notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <ToastComp
          show={toastVisible}
          message={toastMessage}
          onClose={closeToast}
        />
      </div>
    </div>
  );
}

export default FormEditSlideHome;
