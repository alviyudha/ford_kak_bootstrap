import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../ModalConfirmnew";

function FormEditSlideHome() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const response = await api.getSlideHomeById(id);
        setCurrentImage(response.data.imageUrl);
      } catch (error) {
        setToastMessage("Failed to load slide data.",error.message);
        setToastVisible(true);
      }
    };
    fetchSlide();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async () => {
    if (!image && !currentImage) {
      setToastMessage("Please select an image file.");
      setToastVisible(true);
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      await api.updateSlideHome(id, formData);
      setToastMessage("Slide updated successfully.");
      setToastVisible(true);
      setShowModal(false);
      navigate("/admin-ford/slidehome");
    } catch (error) {
      setToastMessage(
        error.response ? error.response.data.msg : "Failed to update slide."
      );
      setToastVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit Slide</h2>
      <form onSubmit={handleFormSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Slide Image (Max: 5MB, PNG/JPG/JPEG)
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
          {currentImage && !image && (
            <div className="mt-2">
              <img
                src={currentImage}
                alt="Current Slide"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Slide"}
        </button>
      </form>

      {/* Toast Notification */}
      <ToastComp
        show={toastVisible}
        message={toastMessage}
        onClose={closeToast}
      />

      {/* Modal Confirmation */}
      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleSubmit}
        type="update"
      />
    </div>
  );
}

export default FormEditSlideHome;
