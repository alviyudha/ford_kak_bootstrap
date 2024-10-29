import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LayoutAdmin from '../LayoutAdmin';
import Dashboard from './admin-kak/page/Dashboard';
import ErrorPage from './frontend/Page/ErrorPage';
import VehicleList from './admin-kak/page/vehicle/VehicleList';
import AddVehicle from './admin-kak/page/vehicle/AddVehicle';
import EditVehicle from './admin-kak/page/vehicle/EditVehicle';
import TrimList from './admin-kak/page/trim/TrimList';
import TrimAdd from './admin-kak/page/trim/TrimAdd';
import TrimEdit from './admin-kak/page/trim/TrimEdit';
import SlideHomeList from './admin-kak/page/slidehome/SlideHomeList';
import AddSlideHome from './admin-kak/page/slidehome/AddSlideHome';
import EditSlideHome from './admin-kak/page/slidehome/EditSlideHome';
import ColorList from './admin-kak/page/color/ColorList';
import AddColor from './admin-kak/page/color/AddColor';
import EditColor from './admin-kak/page/color/EditColor';
import DealerList from './admin-kak/page/dealer/DealerList';
import AddDealer from './admin-kak/page/dealer/addDealer';
import EditDealer from './admin-kak/page/dealer/editDealer';
import MiniSpecList from './admin-kak/page/minispec/MiniSpecList';
import AddMiniSpec from './admin-kak/page/minispec/addMiniSpec';
import EditMiniSpec from './admin-kak/page/minispec/EditMiniSpec';
import SpecificationList from './admin-kak/page/specification/SpecificationList';
import AddSpec from './admin-kak/page/specification/AddSpec';
import EditSpec from './admin-kak/page/specification/EditSpec';
import Login from './admin-kak/page/Login/Login';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from './admin-kak/utils/api';
import { setAuthUserActionCreator } from './admin-kak/state/login/action';
import MessageList from './admin-kak/page/message/Messagelist';
import UserList from './admin-kak/page/user/UserList';
import EditUser from './admin-kak/page/user/EditUser';
import AddUser from './admin-kak/page/user/AddUser';

function AdminApp() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
  
    if (token) {
      api.putAccessToken(token);
      api
        .getOwnProfile()
        .then((user) => {
          dispatch(setAuthUserActionCreator(user));
          setLoading(false);
        })
        .catch((error) => {
          if (error.response && error.response.data.msg === "jwt expired") {
            localStorage.removeItem("accessToken"); 
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/admin-ford"
          element={
            authUser ? (
              <Navigate to="/admin-ford/dashboard" />
            ) : (
              <Login />
            )
          }
        />
        <Route element={<LayoutAdmin authUser={authUser} />}>
          {authUser ? (
            <>
              <Route path='/admin-ford/dashboard' element={<Dashboard />} />
              <Route path='/admin-ford/vehicle' element={<VehicleList />} />
              <Route path='/admin-ford/vehicle/add' element={<AddVehicle />} />
              <Route path='/admin-ford/vehicle/edit/:id' element={<EditVehicle />} />
              <Route path='/admin-ford/trim/' element={<TrimList />} />
              <Route path='/admin-ford/trim/add' element={<TrimAdd />} />
              <Route path='/admin-ford/trim/edit/:id' element={<TrimEdit />} />
              <Route path='/admin-ford/slideHome/' element={<SlideHomeList />} />
              <Route path='/admin-ford/slideHome/add' element={<AddSlideHome />} />
              <Route path='/admin-ford/slideHome/edit/:id' element={<EditSlideHome />} />
              <Route path='/admin-ford/color/' element={<ColorList />} />
              <Route path='/admin-ford/color/add' element={<AddColor />} />
              <Route path='/admin-ford/color/edit/:id' element={<EditColor />} />
              <Route path='/admin-ford/dealer/' element={<DealerList />} />
              <Route path='/admin-ford/dealer/add' element={<AddDealer />} />
              <Route path='/admin-ford/dealer/edit/:id' element={<EditDealer />} />
              <Route path='/admin-ford/minispec/' element={<MiniSpecList />} />
              <Route path='/admin-ford/minispec/add' element={<AddMiniSpec />} />
              <Route path='/admin-ford/minispec/edit/:id' element={<EditMiniSpec />} />
              <Route path='/admin-ford/specification/' element={<SpecificationList />} />
              <Route path='/admin-ford/specification/add' element={<AddSpec />} />
              <Route path='/admin-ford/specification/edit/:id' element={<EditSpec />} />
              <Route path='/admin-ford/message' element={<MessageList />} />
              <Route path='/admin-ford/user' element={<UserList />} />
              <Route path='/admin-ford/user/add' element={<AddUser />} />
              <Route path='/admin-ford/user/edit/:cuid' element={<EditUser />} />
              <Route path='/admin-ford/*' element={<ErrorPage />} />
            </>
          ) : (
            <Route path="/admin-ford/*" element={<Navigate to="/admin-ford" />} />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default AdminApp;
