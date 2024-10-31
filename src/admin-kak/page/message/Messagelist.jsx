import { useEffect, useState } from "react";
import api from "../../utils/api";
import ModalConf from "../../component/ModalConfirmnew";
import ToastComp from "../../component/ToastComp";
import { Pagination } from "react-bootstrap";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("all");

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.getMessageData();
        // Urutkan pesan berdasarkan dateInput (dari terbaru ke terlama)
        const sortedMessages = response.sort(
          (a, b) => new Date(b.dateInput) - new Date(a.dateInput)
        );
        setMessages(sortedMessages);
        setFilteredMessages(sortedMessages);
        setLoading(false);
      } catch (error) {
        setToastMessage(
          error.response ? error.response.data.msg : error.message
        );
        setToastVisible(true);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteMessage(messageToDelete);
      const updatedMessages = messages.filter(
        (msg) => msg.id !== messageToDelete
      );
      setMessages(updatedMessages);
      applyFilter(filterCategory, updatedMessages); // Perbarui filteredMessages
      setShowModal(false);
      setToastMessage("Data berhasil dihapus.");
      setToastVisible(true);
    } catch (error) {
      setToastMessage(error.response ? error.response.data.msg : error.message);
      setToastVisible(true);
    }
  };

  const openDeleteModal = (id) => {
    setMessageToDelete(id);
    setShowModal(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const applyFilter = (category, allMessages = messages) => {
    setFilterCategory(category);
    if (category === "all") {
      setFilteredMessages(allMessages);
    } else {
      setFilteredMessages(
        allMessages.filter((msg) => msg.catMessage === category)
      );
    }
    setCurrentPage(1); // Reset halaman ke 1 saat filter berubah
  };

  const currentMessages = filteredMessages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Message List</h2>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button
          className={`btn ${
            filterCategory === "all" ? "btn-primary" : "btn-outline-primary"
          } mr-2`}
          onClick={() => applyFilter("all")}
        >
          All
        </button>
        <button
          className={`btn ${
            filterCategory === "service" ? "btn-primary" : "btn-outline-primary"
          } mr-2`}
          onClick={() => applyFilter("service")}
        >
          Service
        </button>
        <button
          className={`btn ${
            filterCategory === "test_drive"
              ? "btn-primary"
              : "btn-outline-primary"
          } mr-2`}
          onClick={() => applyFilter("test_drive")}
        >
          Test Drive
        </button>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Telp</th>
            <th>Kategori</th>
            <th>Pesan</th>
            <th>Model Mobil</th>
            <th>Dealer</th>
            <th>Tanggal Input</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentMessages.map((msg, index) => (
            <tr key={msg.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.telp}</td>
              <td>{msg.catMessage}</td>
              <td>{msg.inputMessage}</td>
              <td>{msg.carModel}</td>
              <td>{msg.dealer}</td>
              <td>{new Date(msg.dateInput).toLocaleDateString()}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => openDeleteModal(msg.id)}
                >
                  Delete
                </button>
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
        {[...Array(Math.ceil(filteredMessages.length / itemsPerPage))].map(
          (_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredMessages.length / itemsPerPage)
          }
        />
        <Pagination.Last
          onClick={() =>
            handlePageChange(Math.ceil(filteredMessages.length / itemsPerPage))
          }
          disabled={
            currentPage === Math.ceil(filteredMessages.length / itemsPerPage)
          }
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
          onClose={() => setToastVisible(false)}
        />
      </div>
    </div>
  );
}

export default MessageList;
