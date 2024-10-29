import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../../component/ToastComp";

function FormAddColor() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [descColor, setDescColor] = useState("");
  const [trimId, setTrimId] = useState("");
  const [colorsImage, setColorsImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [trims, setTrims] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrimData = async () => {
      try {
        const response = await api.getTrimData();
        setTrims(response);
        console.log("Trims Data:", response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrimData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("backgroundColor", backgroundColor);
    formData.append("descColor", descColor);
    formData.append("trimId", trimId);
    formData.append("colorsImage", colorsImage);

    try {
      await api.postColor(formData);
      setLoading(false);
      navigate("/admin-ford/color");
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
      <h2 className="mb-4">Add New Color</h2>

      <form onSubmit={handleSubmit}>
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
            Description
          </label>
          <textarea
            className="form-control"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="backgroundColor" className="form-label">
            Background Color
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descColor" className="form-label">
            Color Name
          </label>
          <input
            type="text"
            className="form-control"
            id="descColor"
            value={descColor}
            onChange={(e) => setDescColor(e.target.value)}
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
            <option value="">Select Vehicle</option>
            {trims.map((trim) => (
              <option key={trim.id} value={trim.id}>
                {trim.linkPage}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="colorsImage" className="form-label">
            Color Image
          </label>
          <input
            type="file"
            className="form-control"
            id="colorsImage"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setColorsImage(e.target.files[0])}
            required
          />
          <small className="form-text text-muted">
            Image must be less than 5 MB.
          </small>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : "Save Color"}
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

export default FormAddColor;
