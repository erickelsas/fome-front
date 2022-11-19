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
import AdminTable from './pages/admin-mesas/AdminTable';
import AdminMenu from './pages/admin-cardapio/AdminMenu';
import Attendant from './pages/attendant/Attendant';

function App() {
  const { role } = useContext(RoleContext);
  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Rotas */}
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={role === 'ADMIN_ROLE' ? <Login /> : <Navigate to='/' /> }/>

          {/* PAINEIS */}
          <Route 
            path='/painel/admin/pedidos'
            element={ role === 'ADMIN_ROLE' ? <Admin /> : <Navigate to='/' /> } />
          <Route 
            path='/painel/admin/mesas' 
            element={ role === 'ADMIN_ROLE' ? <AdminTable /> : <Navigate to='/' /> } />
          <Route 
            path='/painel/admin/cardapio' 
            element={ role === 'ADMIN_ROLE' ? <AdminMenu /> : <Navigate to='/' /> } />

          <Route 
            path='/painel/kitchen' 
            element={(role === 'KITCHEN_ROLE' || role === 'ADMIN_ROLE') ? <Kitchen /> : <Navigate to='/' />} />
          <Route 
            path='/painel/attendant' 
            element={(role === 'ATTENDANT_ROLE' || role === 'ADMIN_ROLE') ? <Attendant /> : <Navigate to='/' />} />
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
