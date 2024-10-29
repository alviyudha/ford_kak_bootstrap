import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../ToastComp";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalConf from "../modalConf";

function FormEditTrim() {
  const { id } = useParams();
  const [trimData, setTrimData] = useState({
    trim: "",
    trimDetail: "",
    otrArea: "",
    otrPrice: "",
    urlYoutube: "",
    itemSpec1: "",
    itemSpec2: "",
    itemSpec3: "",
    linkPage: "",
    urlImgView: "",
    urlBackgroundImg: "",
    urlBrochure: "",
  });
  const navigate = useNavigate();
  const [backgroundImg, setBackgroundImg] = useState(null);
  const [brochure, setBrochure] = useState(null);
  const [imgView, setImgView] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTrimData = async () => {
      try {
        const response = await api.getTrimById(id);
        setTrimData(response);
      } catch (error) {
        console.error("Error fetching trim data:", error);
      }
    };
    fetchTrimData();
  }, [id]);

  const handleInputChange = (e) => {
    setTrimData({
      ...trimData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "backgroundImg") setBackgroundImg(files[0]);
    if (name === "brochure") setBrochure(files[0]);
    if (name === "imgView") setImgView(files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("trim", trimData.trim);
    formData.append("trimDetail", trimData.trimDetail);
    formData.append("otrArea", trimData.otrArea);
    formData.append("otrPrice", trimData.otrPrice);
    formData.append("urlYoutube", trimData.urlYoutube);
    formData.append("itemSpec1", trimData.itemSpec1);
    formData.append("itemSpec2", trimData.itemSpec2);
    formData.append("itemSpec3", trimData.itemSpec3);
    formData.append("linkPage", trimData.linkPage);
    if (backgroundImg) formData.append("backgroundImg", backgroundImg);
    if (brochure) formData.append("brochure", brochure);
    if (imgView) formData.append("imgView", imgView);

    try {
      await api.updateTrim(id, formData);
      navigate("/admin-ford/trim");
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Trim</h2>

      <form onSubmit={handleFormSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="trim" className="form-label">
            Trim:
          </label>
          <input
            type="text"
            className="form-control"
            id="trim"
            name="trim"
            value={trimData.trim}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="trimDetail" className="form-label">
            Trim Detail:
          </label>
          <input
            type="text"
            className="form-control"
            id="trimDetail"
            name="trimDetail"
            value={trimData.trimDetail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="otrArea" className="form-label">
            OTR Area:
          </label>
          <input
            type="text"
            className="form-control"
            id="otrArea"
            name="otrArea"
            value={trimData.otrArea}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="otrPrice" className="form-label">
            OTR Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="otrPrice"
            name="otrPrice"
            value={trimData.otrPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="urlYoutube" className="form-label">
            YouTube URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="urlYoutube"
            name="urlYoutube"
            value={trimData.urlYoutube}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemSpec1" className="form-label">
            Item Spec 1:
          </label>
          <input
            type="text"
            className="form-control"
            id="itemSpec1"
            name="itemSpec1"
            value={trimData.itemSpec1}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemSpec2" className="form-label">
            Item Spec 2:
          </label>
          <input
            type="text"
            className="form-control"
            id="itemSpec2"
            name="itemSpec2"
            value={trimData.itemSpec2}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemSpec3" className="form-label">
            Item Spec 3:
          </label>
          <input
            type="text"
            className="form-control"
            id="itemSpec3"
            name="itemSpec3"
            value={trimData.itemSpec3}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="linkPage" className="form-label">
            Link Page:
          </label>
          <input
            type="text"
            className="form-control"
            id="linkPage"
            name="linkPage"
            value={trimData.linkPage}
            onChange={handleInputChange}
            readOnly
          />
        </div>

        {/* File upload inputs */}
        {trimData.urlBackgroundImg && (
          <div className="mb-3">
            <img
              src={trimData.urlBackgroundImg}
              alt="Background"
              style={{ width: "200px", height: "auto" }}
              className="img-thumbnail"
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="backgroundImg" className="form-label">
            Upload New Background Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="backgroundImg"
            name="backgroundImg"
            onChange={handleFileChange}
          />
        </div>

        {trimData.urlBrochure && (
          <div className="mb-3">
            <a
              href={trimData.urlBrochure}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Brochure
            </a>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="brochure" className="form-label">
            Upload New Brochure (PDF):
          </label>
          <input
            type="file"
            className="form-control"
            id="brochure"
            name="brochure"
            onChange={handleFileChange}
          />
        </div>

        {trimData.urlImgView && (
          <div className="mb-3">
            <img
              src={trimData.urlImgView}
              alt="View"
              style={{ width: "200px", height: "auto" }}
              className="img-thumbnail"
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="imgView" className="form-label">
            Upload New Image View:
          </label>
          <input
            type="file"
            className="form-control"
            id="imgView"
            name="imgView"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Trim"}
        </button>
      </form>

      {/* Toast notification */}
      <ToastComp
        show={toastVisible}
        message={toastMessage}
        onClose={closeToast}
      />

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

export default FormEditTrim;
