import React, { useContext } from 'react';

//css
import './NavBarHome.css';

//assets
import logo from '../assets/logo.svg';

//components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Navigate } from 'react-router-dom'
import { RoleContext } from '../context/RoleContext';



const NavBarHome = ({ children }) => {
  const { role, setRole } = useContext(RoleContext);

  return (
    <Navbar className='bg-nav'>
        <Container className='d-flex justify-content-between'>
            <NavLink to='/' className='w-100 d-flex justify-content-start align-items-center'>
              <Navbar.Brand className='d-flex align-items-center justify-content-center'>
                <img src={logo} alt="FOME logo" className='logo'/>
              </Navbar.Brand>
            </NavLink>
            <div className='d-flex justify-content-center align-items-center w-100 text-center text-light mb-0 mt-0 children'>
              { children !== '' ? children : (<></>)}
            </div>
            <div className='menu-options w-100'>
                <NavLink to='/' end>Cardápio</NavLink>
                {role === 'VISITOR_ROLE' && <NavLink to='/login'>Entrar</NavLink>}
                {role === 'ADMIN_ROLE' && <NavLink to='/painel/admin'>Painel</NavLink>}
                {role === 'ATTENDANT_ROLE' && <NavLink to='/painel/admin'>Painel</NavLink>}
                {role === 'KITCHEN_ROLE' && <NavLink to='/painel/kitchen'>Painel</NavLink>}
                {role === 'WAITER_ROLE' && <NavLink to='/painel/waiter'>Painel</NavLink>}
                {role !== 'VISITOR_ROLE' && <NavLink to ='/' end onClick={() => setRole(null)}>Sair</NavLink>}
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBarHome