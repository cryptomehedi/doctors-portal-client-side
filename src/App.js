
import { Route, Routes } from 'react-router-dom';
import Appointment from './Component/Pages/Appointment/Appointment';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Login/Register';
import Footer from './Component/Pages/Shared/Footer';
import Nav from './Component/Pages/Shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
        <div className='md:px-16 px-4'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/appointment" element={<Appointment/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
