import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import api from '../utils/api'; // Import the inputMessage function

export default function FormServiceComp({ bookingProps }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telp: '',
    nopol: '',
    carModel: 'Jenis Kendaraan',
    dealer: 'Pilih Dealer',
    DateService: '',
    inputMessage: '',
    address: '', // Tambahkan field address di formData
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, telp, nopol, carModel, dealer, DateService, inputMessage, address } = formData;

    if (carModel === 'Jenis Kendaraan' || dealer === 'Pilih Dealer') {
      alert('Silakan pilih Jenis Kendaraan dan Dealer terlebih dahulu.');
      return;
    }

    const data = {
      name,
      email,
      telp,
      nopol,
      carModel,
      dealer,
      dateInput: DateService,
      inputMessage,
      catMessage: 'service', 
      address, // Sertakan address dalam data
    };

    try {
      const response = await api.inputMessage(data);

      if (response) {
        alert('Data berhasil disimpan');

        const selectedDealer = bookingProps.datadealer.find(d => d.name === dealer);
        if (selectedDealer) {
          const whatsappNumber = selectedDealer.whatsapp;
          const messageWa = `Halo, Saya ingin melakukan booking service.\nNama: ${name}.\nEmail: ${email}\nTelp: ${telp}\nMobil yang digunakan: ${carModel}\nNOPOL: ${nopol}.\nDealer yang diinginkan: ${dealer}.\nJadwal Service: ${DateService}\nPesan: ${inputMessage}`;

          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageWa)}`;
          window.open(whatsappUrl, '_blank');
        } else {
          alert('Silakan pilih dealer terlebih dahulu.');
        }
      } else {
        alert('Terjadi kesalahan saat menyimpan data.');
      }
    } catch (error) {
      alert('Terjadi kesalahan koneksi.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} target="_blank">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Masukkan Nama Lengkap Anda"
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTelp">
          <Form.Label>Telp</Form.Label>
          <Form.Control
            type="tel"
            name="telp"
            value={formData.telp}
            onChange={handleInputChange}
            placeholder="Masukkan Nomor Telp Anda"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Masukkan Alamat Email Anda"
          />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formNopol">
        <Form.Label>No Pol Kendaraan</Form.Label>
        <Form.Control
          type="text"
          name="nopol"
          value={formData.nopol}
          onChange={handleInputChange}
          placeholder="Ex B 123 CDS"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formSelectCar">
        <Form.Label>Jenis Kendaraan</Form.Label>
        <Form.Control
          as="select"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
        >
          <option value="Jenis Kendaraan">Jenis Kendaraan</option>
          {bookingProps.datatrim.map((trim, index) => (
            <option key={index} value={trim.linkPage}>{trim.linkPage}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formDateService">
        <Form.Label>Jadwal Service</Form.Label>
        <Form.Control
          type="date"
          name="DateService"
          value={formData.DateService}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formSelectDealer">
        <Form.Label>Pilih Dealer</Form.Label>
        <Form.Control
          as="select"
          name="dealer"
          value={formData.dealer}
          onChange={handleInputChange}
        >
          <option value="Pilih Dealer">Pilih Dealer</option>
          {bookingProps.datadealer.map((dealer, index) => (
            <option key={index} value={dealer.name}>{dealer.name}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formAddress">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address" // Ubah name menjadi address
          value={formData.address} // Ubah value menjadi formData.address
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Anda"
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formInputMessage">
        <Form.Label>Pesan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="inputMessage"
          value={formData.inputMessage}
          onChange={handleInputChange}
          placeholder="Masukkan Pesan Anda"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
