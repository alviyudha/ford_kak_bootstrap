import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../modalConf";

function FormEditSpec() {
  const [specification, setSpecification] = useState({
    title: "",
    text: "",
    catSpec: "",
    trimId: "",
  });
  const [trims, setTrims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpecData = async () => {
      try {
        const response = await api.getSpecById(id);
        setSpecification(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchTrimData = async () => {
      try {
        const trimsResponse = await api.getTrimData();
        setTrims(trimsResponse);
      } catch (error) {
        console.error("Error fetching trims:", error);
      }
    };

    fetchSpecData();
    fetchTrimData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpecification({ ...specification, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.updateSpec(id, specification);
      setToastMessage("Specification updated successfully.");
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
      <h2>Edit Specification</h2>
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
            value={specification.title}
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
            value={specification.text}
            onChange={handleInputChange}
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
            name="catSpec"
            value={specification.catSpec}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="engine">Engine</option>
            <option value="transmission">Transmission</option>
            <option value="brakeControl">Brake Control</option>
            <option value="exteriorFeature">Exterior Feature</option>
            <option value="interiorFeature">Interior Feature</option>
            <option value="safetySecurity">Safety & Security</option>
            <option value="dimension">Dimension</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="trimId" className="form-label">
            Trim
          </label>
          <select
            className="form-control"
            id="trimId"
            name="trimId"
            value={specification.trimId}
            onChange={handleInputChange}
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
          Update Specification
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

export default FormEditSpec;
