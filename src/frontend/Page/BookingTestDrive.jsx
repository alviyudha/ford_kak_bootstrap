import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingDataComp from '../Components/LoadingDataComp';
import { fetchTestDriveData } from '../state/testdrive/action';
import TestDriveComp from '../Components/TestDriveComp';

export default function BookingTestDrive() {
  const dispatch = useDispatch();
  const { testDriveData, loading, error } = useSelector(state => state.testDrive);  

  useEffect(() => {
    dispatch(fetchTestDriveData());
  }, [dispatch]);

  if (loading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1 className='text-center text-color-primary'>Form Test Drive</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal Test Drive, Silahkan lengkapi data Anda pada form Berikut ini
        </p>
        {testDriveData && (
          <TestDriveComp testDriveProps={testDriveData} />  
        )}
      </div>
    </main>
  );
}
