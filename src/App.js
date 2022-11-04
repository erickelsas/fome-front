import './App.css';

import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { RoleContext } from './context/RoleContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Admin from './pages/admin/Admin';
import Kitchen from './pages/kitchen/Kitchen';
import Waiter from './pages/waiter/Waiter';

function App() {
  const { role } = useContext(RoleContext);
  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Rotas */}
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={role === null ? <Login /> : <Navigate to='/' /> }/>

          {/* PAINEIS */}
          <Route 
            path='/painel/admin' 
            element={ role === 'ADMIN_ROLE' ? <Admin /> : <Navigate to='/' /> } />
          <Route 
            path='/painel/kitchen' 
            element={(role === 'KITCHEN_ROLE' || role === 'ADMIN_ROLE') ? <Kitchen /> : <Navigate to='/' />} />
          <Route 
            path='/painel/attendant' 
            element={(role === 'ATTENDANT_ROLE' || role === 'ADMIN_ROLE') ? <Kitchen /> : <Navigate to='/' />} />
          <Route 
            path='/painel/waiter' 
            element={(role === 'WAITER_ROLE' || role === 'ADMIN_ROLE') ? <Waiter /> : <Navigate to='/' />} />

          {/* 404 */}
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
