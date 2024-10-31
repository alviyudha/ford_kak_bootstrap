import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ModalConf from "../../component/ModalConfirmnew";
import { Pagination } from "react-bootstrap";
import ToastComp from "../../component/ToastComp";

function ColorList() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [colorToDelete, setColorToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 2;
  const totalPages = Math.ceil(colors.length / itemsPerPage);
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await api.getColorTrim();
        setColors(response);
        setLoading(false);
      } catch (error) {
        setToastMessage(
          error.response ? error.response.data.msg : error.message
        );
        setToastVisible(true);
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteColor(colorToDelete);
      setColors(colors.filter((color) => color.id !== colorToDelete));
      setShowModal(false);
      setToastMessage("Specification deleted successfully.");
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
    setColorToDelete(id);
    setShowModal(true);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentColorList = colors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Color List</h2>

      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New Color
        </button>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Color Name</th>
            <th>Preview</th>
            <th>Type Unit</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentColorList.map((color, index) => (
            <tr key={color.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{color.title}</td>
              <td>{color.text}</td>
              <td>{color.descColor}</td>
              <td>
                <img
                  src={color.urlcolorsImage}
                  alt={color.descColor}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{color.trim.linkPage}</td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  {/* Edit Button */}
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`edit/${color.id}`)}
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(color.id)}
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

export default ColorList;
