import { useEffect, useState } from 'react';
import FormServicesComp from '../Components/FormServicesComp';
import api from '../utils/api';

export default function BookingServices() {
  const [dropdownData, setdropdownData] = useState(null); 

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const response = await api.getDropdownData();
        setdropdownData(response);
        console.log('Dropdown Data:', JSON.stringify(response, null, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDropdownData();
  }, []);
  if (!dropdownData) {
    return <div>Loading...</div>;
  }

  return (
    <main className='BookingServices'>
      <div className="box-form shadow-lg">
        <h1 className='text-color-primary'>Form Booking Service</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal service, Silahkan lengkapi data Anda pada form Booking Service dibawah ini.
        </p>
        <FormServicesComp bookingProps={dropdownData} /> 
      </div>
    </main>
  );
}
