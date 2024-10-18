import { useEffect, useState } from 'react';
import TestDriveComp from '../Components/TestDriveComp'
import api from '../utils/api';

export default function BookingTestDrive() {
  const [dropdownData, setdropdownData] = useState(null); 

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const response = await api.getDropdownData();
        setdropdownData(response);
        console.log('Dropdown Data test drive:', JSON.stringify(response, null, 2));
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
    <>
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1 className='text-center text-color-primary'>Form Test Drive</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal Test Drive, Silahkan lengkapi data Anda pada form Berikut ini
        </p>
        <TestDriveComp serviceProps={dropdownData}/>
      </div>
    </main>
    </>
  )
}
