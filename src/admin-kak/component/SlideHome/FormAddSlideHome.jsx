import { useState } from 'react';
import ToastComp from '../../component/ToastComp';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

function FormAddSlideHome() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate()
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setToastMessage('Please select an image file.');
      setToastVisible(true);
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      setLoading(true);
       await api.postSlideHome(formData);
      setLoading(false);
      setToastMessage('Slide created successfully.');
      setToastVisible(true);
      navigate('/admin-ford/slidehome');
    } catch (error) {
      setLoading(false);
      setToastMessage(error.response ? error.response.data.msg : 'Failed to create slide.');
      setToastVisible(true);
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Slide</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Slide Image (Max: 5MB, PNG/JPG/JPEG)
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : 'Add Slide'}
        </button>
      </form>

      {/* Toast notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <ToastComp show={toastVisible} message={toastMessage} onClose={closeToast} />
      </div>
    </div>
  );
}

export default FormAddSlideHome;
