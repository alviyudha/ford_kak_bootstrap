import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../modalConf";

function FormAddSpec() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [catSpec, setCatSpec] = useState("");
  const [trimId, setTrimId] = useState("");
  const [trims, setTrims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "engine",
    "transmission&Chassis",
    "brakeControl",
    "exteriorFeature",
    "interiorFeature",
    "safetySecurity",
    "dimension",
  ];

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

  const handleSubmit = async () => {
    const formData = { title, text, catSpec, trimId };

    try {
      await api.postSpec(formData);
      setToastMessage("Specification created successfully.");
      setToastVisible(true);
      navigate("/admin-ford/specification");
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
      <h2>Add Specification</h2>
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
          <label htmlFor="catSpec" className="form-label">
            Category
          </label>
          <select
            className="form-control"
            id="catSpec"
            value={catSpec}
            onChange={(e) => setCatSpec(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
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

        <button type="submit" className="btn btn-primary">
          Add Specification
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

export default FormAddSpec;
