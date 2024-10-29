import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ModalConf from "../../component/modalConf";
import ToastComp from "../../component/ToastComp";

function TrimList() {
  const [trims, setTrims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [trimToDelete, setTrimToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrims = async () => {
      try {
        const response = await api.getTrimData();
        setTrims(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrims();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteTrim(trimToDelete);
      setTrims(trims.filter((trim) => trim.id !== trimToDelete));
      setShowModal(false);
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  const openDeleteModal = (id) => {
    setTrimToDelete(id);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Trim List</h2>

      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New Trim
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Trim</th>
              <th>Trim Detail</th>
              <th>OTR Area</th>
              <th>OTR Price</th>
              <th>Image</th>
              <th>Brochure</th>
              <th>Background Image</th>
              <th>Item Specs</th>
              <th>Date Created</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trims.map((trim, index) => (
              <tr key={trim.id}>
                <td>{index + 1}</td>
                <td>{trim.trim}</td>
                <td>{trim.trimDetail}</td>
                <td>{trim.otrArea}</td>
                <td>{trim.otrPrice}</td>

                <td>
                  <img
                    src={trim.urlImgView}
                    alt={trim.trim}
                    style={{ width: "100px", height: "auto" }}
                    className="img-thumbnail"
                  />
                </td>

                {/* Display the brochure link */}
                <td>
                  <a
                    href={trim.urlBrochure}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Brochure
                  </a>
                </td>

                {/* Display the background image */}
                <td>
                  <img
                    src={trim.urlBackgroundImg}
                    alt={`${trim.trim} background`}
                    style={{ width: "100px", height: "auto" }}
                    className="img-thumbnail"
                  />
                </td>

                {/* Display the item specs */}
                <td>
                  <ul className="list-unstyled">
                    <li>{trim.itemSpec1}</li>
                    <li>{trim.itemSpec2}</li>
                    <li>{trim.itemSpec3}</li>
                  </ul>
                </td>

                <td>{new Date(trim.createdAt).toLocaleDateString()}</td>
                <td className="text-center">
                  <div className="btn-group" role="group">
                    {/* Edit Button */}
                    <button
                      className="btn btn-sm btn-warning mr-2"
                      onClick={() => navigate(`edit/${trim.id}`)}
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => openDeleteModal(trim.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Confirmation */}
      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        type={"delete"}
      />
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

export default TrimList;
