
import { Route, Routes } from 'react-router-dom';
import Appointment from './Component/Pages/Appointment/Appointment';
import Home from './Component/Pages/Home/Home';
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
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
