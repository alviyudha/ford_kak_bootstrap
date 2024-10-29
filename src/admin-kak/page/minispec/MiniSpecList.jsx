import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastComp from "../../component/ToastComp";
import { Pagination } from "react-bootstrap";
import ModalConf from "../../component/ModalConf";

function MiniSpecList() {
  const [miniSpecs, setMiniSpecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [miniSpecToDelete, setMiniSpecToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const totalPages = Math.ceil(miniSpecs.length / itemsPerPage);

  useEffect(() => {
    const fetchMiniSpecs = async () => {
      try {
        const response = await api.getMiniSpecTrimData();
        setMiniSpecs(response);
        setLoading(false);
      } catch (error) {
        setToastMessage(
          error.response ? error.response.data.msg : error.message
        );
        setToastVisible(true);
        setLoading(false);
      }
    };

    fetchMiniSpecs();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteMiniSpec(miniSpecToDelete);
      setMiniSpecs(miniSpecs.filter((spec) => spec.id !== miniSpecToDelete));
      setShowModal(false);
      setToastMessage("Data successfully.");
      setToastVisible(true);
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  const openDeleteModal = (id) => {
    setMiniSpecToDelete(id);
    setShowModal(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentSpecifications = miniSpecs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mini Specification List</h2>
      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New Data
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Type</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentSpecifications.map((spec, index) => (
            <tr key={spec.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{spec.title}</td>
              <td>{spec.text}</td>
              <td>
                <img
                  src={spec.urlImgMiniSpec}
                  alt={spec.title}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{spec.trim.linkPage}</td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  {/* Edit Button */}
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`edit/${spec.id}`)}
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(spec.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination className="justify-content-center mt-4">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

      {/* Confirmation Modal */}
      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        type={"delete"}
      />

      {/* Toast Notification */}
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

export default MiniSpecList;
