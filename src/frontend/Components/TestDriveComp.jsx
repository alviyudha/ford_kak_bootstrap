import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import api from '../utils/api';

export default function TestDriveComp({ testDriveProps }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telp: '',
    carModel: 'Jenis Kendaraan',
    dealer: 'Pilih Dealer',
    dateTestDrive: '',
    inputMessage: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, telp, carModel, dealer, dateTestDrive, inputMessage, address } = formData;

    if (!name) {
      alert('Nama harus diisi.');
      return;
    }
  
    if (!email) {
      alert('Email harus diisi.');
      return;
    }
  
    if (!telp) {
      alert('Nomor telepon harus diisi.');
      return;
    }
  
    if (carModel === 'Jenis Kendaraan' || dealer === 'Pilih Dealer') {
      alert('Silakan pilih Jenis Kendaraan dan Dealer terlebih dahulu.');
      return;
    }
  

    const data = {
      name,
      email,
      telp,
      carModel,
      dealer,
      dateInput: dateTestDrive,
      inputMessage,
      catMessage: 'test_drive',
      address, 
    };

    try {
      const response = await api.inputMessage(data);

      if (response) {
        alert('Data terkirim');

        const selectedDealer = testDriveProps.datadealer.find(d => d.name === dealer);
        if (selectedDealer) {
          const whatsappNumber = selectedDealer.whatsapp;
          const messageWa = `Halo, Saya ${name} ingin Test Drive *${carModel}* .\nEmail: ${email}\nTelp: ${telp}.\nDealer yang diinginkan: ${dealer}.\nJadwal Test Drive: ${dateTestDrive}\nPesan: ${inputMessage}`;

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
    <form onSubmit={handleSubmit} target='_blank'>
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
      <Row className='mb-3'>
        <Form.Group as={Col} controlId="formSelectCar">
          <Form.Label>Models</Form.Label>
          <Form.Control
            as="select"
            name="carModel"
            value={formData.carModel}
            onChange={handleInputChange}
          >
            <option value="Jenis Kendaraan">Jenis Kendaraan</option>
            {testDriveProps.datatrim.map((trim, index) => (
              <option key={index} value={trim.linkPage}>{trim.linkPage}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formdateTestDrive">
          <Form.Label>Jadwal Test Drive</Form.Label>
          <Form.Control
            type="date"
            name="dateTestDrive"
            value={formData.dateTestDrive}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formSelectDealer">
        <Form.Label>Pilih Dealer Terdekat</Form.Label>
        <Form.Control
          as="select"
          name="dealer"
          value={formData.dealer}
          onChange={handleInputChange}
        >
          <option value="Pilih Dealer">Pilih Dealer</option>
          {testDriveProps.datadealer.map((dealer, index) => (
            <option key={index} value={dealer.name}>{dealer.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Anda"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formInputMessage">
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
