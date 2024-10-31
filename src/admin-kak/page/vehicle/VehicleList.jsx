import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ModalConf from "../../component/ModalConfirmnew";
import ToastComp from "../../component/ToastComp";
import { Pagination } from "react-bootstrap";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const totalPages = Math.ceil(vehicles.length / itemsPerPage);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await api.getVehiclesData();
        setVehicles(response);
        setLoading(false);
      } catch (error) {
        setToastMessage(
          error.response ? error.response.data.msg : error.message
        );
        setToastVisible(true);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteVehicle(vehicleToDelete);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== vehicleToDelete));
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
    setVehicleToDelete(id);
    setShowModal(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentVehice = vehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Vehicle List</h2>

      {/* Add Vehicle Button */}
      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New Vehicle
        </button>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Year</th>
            <th>Type</th>
            <th>Date Created</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentVehice.map((vehicle, index) => (
            <tr key={vehicle.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.type}</td>
              <td>{new Date(vehicle.createdAt).toLocaleDateString()}</td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  {/* Edit Button */}
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`edit/${vehicle.id}`)}
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(vehicle.id)}
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

      {/* Modal Konfirmasi */}
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

export default VehicleList;
