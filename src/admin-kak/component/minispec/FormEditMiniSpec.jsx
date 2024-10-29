import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../modalConf";

function FormEditMiniSpec() {
  const [miniSpec, setMiniSpec] = useState({
    title: "",
    text: "",
    catMiniSpec: "",
    imgMiniSpec: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMiniSpec = async () => {
      try {
        const response = await api.getMiniSpecById(id);
        setMiniSpec(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMiniSpec();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMiniSpec({ ...miniSpec, [name]: value });
  };

  const handleFileChange = (e) => {
    setMiniSpec({ ...miniSpec, imgMiniSpec: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", miniSpec.title);
    formData.append("text", miniSpec.text);
    formData.append("catMiniSpec", miniSpec.catMiniSpec);
    formData.append("trimId", miniSpec.trimId);
    if (miniSpec.imgMiniSpec) {
      formData.append("imgMiniSpec", miniSpec.imgMiniSpec);
    }

    try {
      await api.updateMiniSpec(id, formData);
      navigate("/admin-ford/minispec");
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
      <h2>Edit Mini Specification</h2>
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
            value={miniSpec.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            value={miniSpec.text}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="catMiniSpec" className="form-label">
            Category Mini Spec
          </label>
          <input
            type="text"
            className="form-control"
            id="catMiniSpec"
            name="catMiniSpec"
            value={miniSpec.catMiniSpec}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imgMiniSpec" className="form-label">
            Image Mini Spec
          </label>
          <input
            type="file"
            className="form-control"
            id="imgMiniSpec"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="trimId" className="form-label">
            Trim ID
          </label>
          <input
            type="text"
            className="form-control"
            id="trimId"
            name="trimId"
            value={miniSpec.trimId}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Mini Spec
        </button>
      </form>

      {/* Toast Notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <ToastComp
          show={toastVisible}
          message={toastMessage}
          onClose={closeToast}
        />
      </div>

      {/* Modal Confirmation */}
      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleSubmit}
        type={"update"}
      />
    </div>
  );
}

export default FormEditMiniSpec;
