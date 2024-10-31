import { useEffect, useState } from "react";
import api from "../../utils/api";
import ModalConf from "../../component/ModalConfirmnew";
import ToastComp from "../../component/ToastComp";
import { useNavigate } from "react-router-dom";

function SlideHomeList() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [slideToDelete, setSlideToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await api.getSlideHomeData();
        setSlides(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteSlideHome(slideToDelete);
      setSlides(slides.filter((slide) => slide.id !== slideToDelete));
      setShowModal(false);
      setToastMessage("Slide deleted successfully.");
      setToastVisible(true);
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  const openDeleteModal = (id) => {
    setSlideToDelete(id);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Slide Home List</h2>

      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add Image Slide Home
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Date Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slides.map((slide, index) => (
            <tr key={slide.id}>
              <td>{index + 1}</td>

              {/* Display slide image */}
              <td>
                <img
                  src={slide.urlImage}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100px", height: "auto" }}
                  className="img-thumbnail"
                />
              </td>

              {/* Display date/time of slide */}
              <td>{new Date(slide.datetime).toLocaleString()}</td>

              {/* Action buttons */}
              <td className="text-center">
                <button
                  className="btn btn-sm btn-warning mr-2"
                  onClick={() => navigate(`edit/${slide.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => openDeleteModal(slide.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Confirmation */}
      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        type={"delete"}
      />

      {/* Toast Notification */}
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

export default SlideHomeList;
