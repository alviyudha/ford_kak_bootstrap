import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../ModalConfirmnew";

function FormEditVehicle() {
  const [vehicle, setVehicle] = useState({ model: "", year: "", type: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await api.getVehicleById(id);
        setVehicle(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.updateVehicle(id, vehicle);
      navigate("/admin-ford/vehicle");
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
      <h2>Edit Vehicle</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            value={vehicle.model}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={vehicle.year}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={vehicle.type}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Vehicle
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

export default FormEditVehicle;
