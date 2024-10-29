import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ModalConf from "../../component/ModalConf";
import ToastComp from "../../component/ToastComp";
import { Pagination } from "react-bootstrap";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getUserData();
        setUsers(response);
        setLoading(false);
      } catch (error) {
        setToastMessage(
          error.response ? error.response.data.msg : error.message
        );
        setToastVisible(true);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteUser(userToDelete); // Pastikan Anda memiliki fungsi ini di API
      setUsers(users.filter((user) => user.cuid !== userToDelete)); // Ganti 'id' dengan 'cuid'
      setShowModal(false);
      setToastMessage("Data berhasil dihapus.");
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
    setUserToDelete(id);
    setShowModal(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User List</h2>

      {/* Add User Button */}
      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New User
        </button>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Role</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.cuid}>
              {" "}
              {/* Ganti 'id' dengan 'cuid' */}
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  {/* Edit Button */}
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`edit/${user.cuid}`)} // Ganti 'id' dengan 'cuid'
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(user.cuid)} // Ganti 'id' dengan 'cuid'
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

export default UserList;
