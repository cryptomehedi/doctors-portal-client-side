
import { Route, Routes } from 'react-router-dom';
import Appointment from './Component/Pages/Appointment/Appointment';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Login/Register';
import Footer from './Component/Pages/Shared/Footer';
import Nav from './Component/Pages/Shared/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Component/Pages/Shared/RequireAuth';
import DashBoard from './Component/Pages/DashBoard/DashBoard';
import MyAppointment from './Component/Pages/DashBoard/MyAppointment';
import MyReview from './Component/Pages/DashBoard/MyReview';
import AllUsers from './Component/Pages/DashBoard/AllUsers';
import RequireAdmin from './Component/Pages/Shared/RequireAdmin';
import DeleteUsers from './Component/Pages/DashBoard/DeleteUsers';
import AddDoctor from './Component/Pages/DashBoard/AddDoctor';
import ManegeDoctor from './Component/Pages/DashBoard/ManegeDoctor';

function App() {
  return (
    <div>
      <Nav/>
        <div className='md:px-16 px-4'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/appointment" element={<RequireAuth><Appointment/></RequireAuth>} />
            <Route path="/dashboard" element={<RequireAuth><DashBoard/></RequireAuth>}>
              <Route index element={<MyAppointment/>}/>
              <Route path="review" element={<MyReview/>}/>
              <Route path="allUsers" element={<RequireAdmin><AllUsers/></RequireAdmin>}/>
              <Route path="deleteUsers" element={<RequireAdmin><DeleteUsers/></RequireAdmin>}/>
              <Route path="add-doctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}/>
              <Route path="manege-doctor" element={<RequireAdmin><ManegeDoctor/></RequireAdmin>}/>
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
