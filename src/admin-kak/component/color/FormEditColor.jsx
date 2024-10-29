import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../modalConf";

function FormEditColor() {
  const [color, setColor] = useState({
    title: "",
    text: "",
    backgroundColor: "",
    descColor: "",
    trimId: "",
  });
  const [colorsImage, setColorsImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await api.getColorById(id);
        setColor(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchColor();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setColor({ ...color, [name]: value });
  };

  const handleFileChange = (e) => {
    setColorsImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", color.title);
    formData.append("text", color.text);
    formData.append("backgroundColor", color.backgroundColor);
    formData.append("descColor", color.descColor);
    formData.append("trimId", color.trimId);
    if (colorsImage) formData.append("colorsImage", colorsImage);

    try {
      await api.updateColor(id, formData);
      navigate("/admin-ford/color");
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Color</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={color.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={color.text}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="backgroundColor" className="form-label">
            Background Color
          </label>
          <input
            type="text"
            className="form-control"
            id="backgroundColor"
            name="backgroundColor"
            value={color.backgroundColor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descColor" className="form-label">
            Description Color
          </label>
          <input
            type="text"
            className="form-control"
            id="descColor"
            name="descColor"
            value={color.descColor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="trimId" className="form-label">
            Vehicle ID
          </label>
          <input
            type="text"
            className="form-control"
            id="trimId"
            name="trimId"
            value={color.trimId}
            onChange={handleInputChange}
            required
            hidden
          />
        </div>

        <div className="mb-3">
          <label htmlFor="colorsImage" className="form-label">
            Colors Image
          </label>
          <input
            type="file"
            className="form-control"
            id="colorsImage"
            name="colorsImage"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Color
        </button>
      </form>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <ToastComp
          show={toastVisible}
          message={toastMessage}
          onClose={closeToast}
        />
      </div>

      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleSubmit}
        type={"update"}
      />
    </div>
  );
}

export default FormEditColor;
