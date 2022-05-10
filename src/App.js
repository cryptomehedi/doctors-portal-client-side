
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Nav from './Component/Pages/Shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <div className='md:px-16 px-4'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
