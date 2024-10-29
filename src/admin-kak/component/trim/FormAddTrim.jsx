import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";

function FormAddTrim() {
  const [formData, setFormData] = useState({
    trim: "",
    trimDetail: "",
    vehicleId: "",
    otrArea: "",
    otrPrice: "",
    urlYoutube: "",
    itemSpec1: "",
    itemSpec2: "",
    itemSpec3: "",
    linkPage: "",
  });

  const [vehicles, setVehicles] = useState([]); // State for vehicles data
  const [backgroundImg, setBackgroundImg] = useState(null);
  const [brochure, setBrochure] = useState(null);
  const [imgView, setImgView] = useState(null);

  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await api.getVehiclesData();
        setVehicles(response);
        console.log("Vehicles Data:", JSON.stringify(response, null, 2));
      } catch (error) {
        setError("Failed to fetch vehicles data.", error);
      }
    };
    fetchVehiclesData();
  }, []);

  useEffect(() => {
    const vehicle = vehicles.find((v) => v.id === formData.vehicleId);
    if (vehicle) {
      setFormData((prev) => ({
        ...prev,
        linkPage: `${vehicle.model
          .toLowerCase()
          .replace(/\s+/g, "-")}-${prev.trim
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        linkPage: "",
      }));
    }
  }, [formData.trim, formData.vehicleId, vehicles]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "backgroundImg") setBackgroundImg(files[0]);
    if (name === "brochure") setBrochure(files[0]);
    if (name === "imgView") setImgView(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backgroundImg || !brochure || !imgView) {
      setError("Background image, brochure, and image view are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("trim", formData.trim);
    formDataToSend.append("trimDetail", formData.trimDetail);
    formDataToSend.append("vehicleId", formData.vehicleId);
    formDataToSend.append("otrArea", formData.otrArea);
    formDataToSend.append("otrPrice", formData.otrPrice);
    formDataToSend.append("urlYoutube", formData.urlYoutube);
    formDataToSend.append("itemSpec1", formData.itemSpec1);
    formDataToSend.append("itemSpec2", formData.itemSpec2);
    formDataToSend.append("itemSpec3", formData.itemSpec3);
    formDataToSend.append("linkPage", formData.linkPage);
    formDataToSend.append("backgroundImg", backgroundImg);
    formDataToSend.append("brochure", brochure);
    formDataToSend.append("imgView", imgView);

    try {
      setLoading(true);
      await api.postTrim(formDataToSend);
      setLoading(false);
      navigate("/admin-ford/trim");
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setLoading(false);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Trim</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Trim</label>
          <input
            type="text"
            name="trim"
            value={formData.trim}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Trim Detail</label>
          <input
            type="text"
            name="trimDetail"
            value={formData.trimDetail}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Vehicle Model</label>
          <select
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.model} ({vehicle.year}) - {vehicle.type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>OTR Area</label>
          <input
            type="text"
            name="otrArea"
            value={formData.otrArea}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>OTR Price</label>
          <input
            type="text"
            name="otrPrice"
            value={formData.otrPrice}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Background Image</label>
          <input
            type="file"
            name="backgroundImg"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Brochure (PDF)</label>
          <input
            type="file"
            name="brochure"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Image View</label>
          <input
            type="file"
            name="imgView"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>YouTube URL</label>
          <input
            type="text"
            name="urlYoutube"
            value={formData.urlYoutube}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Item Spec 1</label>
          <input
            type="text"
            name="itemSpec1"
            value={formData.itemSpec1}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Item Spec 2</label>
          <input
            type="text"
            name="itemSpec2"
            value={formData.itemSpec2}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Item Spec 3</label>
          <input
            type="text"
            name="itemSpec3"
            value={formData.itemSpec3}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Link Page</label>
          <input
            type="text"
            name="linkPage"
            value={formData.linkPage}
            readOnly
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
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

export default FormAddTrim;
