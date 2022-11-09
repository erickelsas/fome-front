import React, { useContext, useState } from 'react';

//css
import './NavBarHome.css';

//assets
import logo from '../assets/logo.svg';

//components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { RoleContext } from '../context/RoleContext';



const NavBarHome = ({ children }) => {
  const { role, setRole } = useContext(RoleContext);
  const [hamburguer, setHamburguer] = useState(false);

  return (
    <Navbar className='bg-nav' expand="lg">
        <Container className='d-flex flex-row justify-content-between teste'>
            <NavLink to='/' className='w-100 d-flex justify-content-start align-items-center'>
              <Navbar.Brand className='d-flex align-items-center justify-content-center'>
                <img src={logo} alt="FOME logo" className='logo'/>
              </Navbar.Brand>
            </NavLink>
            <div className='d-flex justify-content-center align-items-center w-100 text-center text-light mb-0 mt-0 children'>
              { children !== '' ? children : (<></>)}
            </div>

            <div className={hamburguer ? 'hamburguer-container change':'hamburguer-container'} onClick={() => {hamburguer ? setHamburguer(false):setHamburguer(true)}}>
              <div className='hamburguer'></div>
            </div>

            <div className={
            hamburguer ? 
            'change menu-options w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center'
            :
            'menu-options w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center'}>
                <NavLink to='/' end>Cardápio</NavLink>
                {role === 'VISITOR_ROLE' && <NavLink to='/login'>Entrar</NavLink>}
                {role === 'ADMIN_ROLE' && <NavLink to='/painel/admin/pedidos'>Painel</NavLink>}
                {role === 'ATTENDANT_ROLE' && <NavLink to='/painel/attendant'>Painel</NavLink>}
                {role === 'KITCHEN_ROLE' && <NavLink to='/painel/kitchen'>Painel</NavLink>}
                {role === 'WAITER_ROLE' && <NavLink to='/painel/waiter'>Painel</NavLink>}
                {role !== 'VISITOR_ROLE' && <NavLink to ='/logout' end onClick={() => setRole(null)}>Sair</NavLink>}
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBarHome