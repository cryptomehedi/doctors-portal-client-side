
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home/Home';
import Nav from './Component/Pages/Shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
