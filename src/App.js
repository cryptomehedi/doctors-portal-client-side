
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

function App() {
  return (
    <div>
      <Nav/>
        <div className='md:px-16 px-4'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/appointment" element={<RequireAuth><Appointment/></RequireAuth>} />
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
