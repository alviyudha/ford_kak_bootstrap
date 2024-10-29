import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ModalConf from "../../component/modalConf";

function DealerList() {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dealerToDelete, setDealerToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await api.getDealerData();
        setDealers(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDealers();
  }, []);

  const handleDelete = async () => {
    try {
      await api.deleteDealer(dealerToDelete);
      setDealers(dealers.filter((dealer) => dealer.id !== dealerToDelete));
      setShowModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const openDeleteModal = (id) => {
    setDealerToDelete(id);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dealer List</h2>

      <div className="mb-4 text-right">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add New Dealer
        </button>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>WhatsApp</th>
            <th>Preview</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dealers.map((dealer, index) => (
            <tr key={dealer.id}>
              <td>{index + 1}</td>
              <td>{dealer.name}</td>
              <td>{dealer.address}</td>
              <td>{dealer.whatsapp}</td>
              <td>
                <img
                  src={dealer.urlImageDealer}
                  alt={dealer.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`edit/${dealer.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(dealer.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalConf
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        type={"delete"}
      />
    </div>
  );
}

export default DealerList;
