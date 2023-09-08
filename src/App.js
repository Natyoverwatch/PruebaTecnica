import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// importaciones de las rutas

import Login from './Login'
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas para acceso Administrador*/}
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
