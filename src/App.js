import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/create';
import Read from './components/read';
import UpDate from './components/update';
import Navbar from './components/navbar';
import Pagination from './pagination';

function App() {
  return (
    <div className='container-principal'>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="*" element={<Create />} />
    <Route path="/read" element={<Read />} />
    <Route path="/update" element={<UpDate />} />
    <Route path="/pagination" element={<Pagination />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
