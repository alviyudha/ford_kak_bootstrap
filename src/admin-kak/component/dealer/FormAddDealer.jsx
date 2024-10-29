import { useState } from "react";
import useInput from "../../hook/useInput";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import ToastComp from "../ToastComp";

function FormAddDealer() {
  const [name, handleNameChange] = useInput("");
  const [address, handleAddressChange] = useInput("");
  const [urlFacebook, handleUrlFacebookChange] = useInput("");
  const [whatsapp, handleWhatsappChange] = useInput("");
  const [urlMaps, handleUrlMapsChange] = useInput("");
  const [urlInstagram, handleUrlInstagramChange] = useInput("");
  const [imgDealer, setImgDealer] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImgDealer(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imgDealer) {
      setToastMessage("Image file is required.");
      setToastVisible(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("urlFacebook", urlFacebook);
    formData.append("whatsapp", whatsapp);
    formData.append("urlMaps", urlMaps);
    formData.append("urlInstagram", urlInstagram);
    formData.append("imgDealer", imgDealer);

    try {
      await api.postDealer(formData);
      navigate("/admin-ford/dealer");
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Dealer</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Dealer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="urlFacebook" className="form-label">
            Facebook URL
          </label>
          <input
            type="url"
            className="form-control"
            id="urlFacebook"
            value={urlFacebook}
            onChange={handleUrlFacebookChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp
          </label>
          <input
            type="tel"
            className="form-control"
            id="whatsapp"
            value={whatsapp}
            onChange={handleWhatsappChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="urlMaps" className="form-label">
            Maps URL
          </label>
          <input
            type="url"
            className="form-control"
            id="urlMaps"
            value={urlMaps}
            onChange={handleUrlMapsChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="urlInstagram" className="form-label">
            Instagram URL
          </label>
          <input
            type="url"
            className="form-control"
            id="urlInstagram"
            value={urlInstagram}
            onChange={handleUrlInstagramChange}
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
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Dealer
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

export default FormAddDealer;
