import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Components
import Navbar from './Component/Navbar/Navbar';

//Pages
import Home from "./Pages/Home/Home"
import Premium from './Pages/Premium/Premium';
import Sweet from './Pages/Sweet/Sweet';
import Drink from './Pages/Drink/Drink';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/sweet" element={<Sweet />} />
          <Route path="/drink" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
