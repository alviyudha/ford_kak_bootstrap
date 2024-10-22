import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormServicesComp from '../Components/FormServicesComp';
import LoadingDataComp from '../Components/LoadingDataComp';
import { fetchBookingServices } from '../state/bookingService/action';

export default function BookingServices() {
  const dispatch = useDispatch();
  const { loading, bookingServicesData, error } = useSelector((state) => state.bookingServices);

  useEffect(() => {
    dispatch(fetchBookingServices());
  }, [dispatch]);

  if (loading) {
    return <LoadingDataComp />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className='BookingServices'>
      <div className="box-form shadow-lg">
        <h1 className='text-color-primary'>Form Booking Service</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal service, Silahkan lengkapi data Anda pada form Booking Service dibawah ini.
        </p>
        {bookingServicesData && <FormServicesComp bookingProps={bookingServicesData} />}
      </div>
    </main>
  );
}
