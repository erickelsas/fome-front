import './App.css';

import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { RoleContext } from './context/RoleContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Painel from './pages/painel/Painel';

function App() {
  const { role } = useContext(RoleContext);
  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Rotas */}
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={role === 'visitant' ? <Login /> : <Navigate to='/' /> }/>
          <Route path='/painel' element={ role === 'admin' ? <Painel /> : <Navigate to='/' /> } />
          {/* 404 */}
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
