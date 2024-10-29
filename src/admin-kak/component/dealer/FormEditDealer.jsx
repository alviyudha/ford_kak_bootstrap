import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import ModalConf from "../modalConf";

function FormEditDealer() {
  const [dealer, setDealer] = useState({
    name: "",
    address: "",
    urlFacebook: "",
    whatsapp: "",
    urlMaps: "",
    urlInstagram: "",
  });
  const [imgDealer, setImgDealer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDealer = async () => {
      try {
        const response = await api.getDealerById(id);
        setDealer(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchDealer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDealer({ ...dealer, [name]: value });
  };

  const handleFileChange = (e) => {
    setImgDealer(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", dealer.name);
    formData.append("address", dealer.address);
    formData.append("urlFacebook", dealer.urlFacebook);
    formData.append("whatsapp", dealer.whatsapp);
    formData.append("urlMaps", dealer.urlMaps);
    formData.append("urlInstagram", dealer.urlInstagram);
    if (imgDealer) formData.append("imgDealer", imgDealer);

    try {
      await api.updateDealer(id, formData);
      navigate("/admin-ford/dealer");
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
      <h2>Edit Dealer</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={dealer.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={dealer.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp
          </label>
          <input
            type="text"
            className="form-control"
            id="whatsapp"
            name="whatsapp"
            value={dealer.whatsapp}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="urlFacebook" className="form-label">
            Facebook URL
          </label>
          <input
            type="text"
            className="form-control"
            id="urlFacebook"
            name="urlFacebook"
            value={dealer.urlFacebook}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="urlInstagram" className="form-label">
            Instagram URL
          </label>
          <input
            type="text"
            className="form-control"
            id="urlInstagram"
            name="urlInstagram"
            value={dealer.urlInstagram}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="urlMaps" className="form-label">
            Maps URL
          </label>
          <input
            type="text"
            className="form-control"
            id="urlMaps"
            name="urlMaps"
            value={dealer.urlMaps}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imgDealer" className="form-label">
            Dealer Image
          </label>
          <input
            type="file"
            className="form-control"
            id="imgDealer"
            name="imgDealer"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Dealer
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

export default FormEditDealer;
