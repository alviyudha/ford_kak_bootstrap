import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../ModalConfirmnew";

function FormAddMiniSpec() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [catMiniSpec, setCatMiniSpec] = useState("");
  const [trimId, setTrimId] = useState("");
  const [imgMiniSpec, setImgMiniSpec] = useState(null);
  const [trims, setTrims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrimData = async () => {
      try {
        const response = await api.getTrimData();
        setTrims(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTrimData();
  }, []);

  const handleFileChange = (e) => {
    setImgMiniSpec(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("catMiniSpec", catMiniSpec);
    formData.append("trimId", trimId);
    if (imgMiniSpec) {
      formData.append("imgMiniSpec", imgMiniSpec);
    }

    try {
      await api.postMiniSpec(formData);
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
      <h2>Add Mini Specification</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="catMiniSpec" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="catMiniSpec"
            value={catMiniSpec}
            onChange={(e) => setCatMiniSpec(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="trimId" className="form-label">
            Trim
          </label>
          <select
            className="form-control"
            id="trimId"
            value={trimId}
            onChange={(e) => setTrimId(e.target.value)}
            required
          >
            <option value="">Select Trim</option>
            {trims.map((trim) => (
              <option key={trim.id} value={trim.id}>
                {trim.linkPage}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="imgMiniSpec" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="imgMiniSpec"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Mini Spec
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
        type={"create"}
      />
    </div>
  );
}

export default FormAddMiniSpec;
