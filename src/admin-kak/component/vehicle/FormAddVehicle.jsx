import { useState } from "react";
import useInput from "../../hook/useInput";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import ToastComp from "../ToastComp";

function FormAddVehicle() {
  const [model, handleModelChange] = useInput("");
  const [year, handleYearChange] = useInput("");
  const [type, handleTypeChange] = useInput("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.postVehicle({
        model,
        year,
        type,
      });
      navigate("/admin-ford/vehicle");
    } catch (error) {
      console.error("Failed to add vehicle:", error);
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">
            Vehicle Model
          </label>
          <input
            type="text"
            className="form-control"
            id="model"
            value={model}
            onChange={handleModelChange}
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
            value={year}
            onChange={handleYearChange}
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
            value={type}
            onChange={handleTypeChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Vehicle
        </button>
      </form>

      {/* Toast for error messages */}
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

export default FormAddVehicle;
