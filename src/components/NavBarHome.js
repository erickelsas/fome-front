import React, { useContext } from 'react';

//css
import './NavBarHome.css';

//assets
import logo from '../assets/logo.svg';

//components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { RoleContext } from '../context/RoleContext';



const NavBarHome = () => {
  const { role, setRole } = useContext(RoleContext);

  return (
    <Navbar className='bg-nav'>
        <Container>
            <NavLink to='/'>
              <Navbar.Brand className='d-flex align-items-center justify-content-center'>
                <img src={logo} alt="FOME logo" className='logo'/>
              </Navbar.Brand>
            </NavLink>
            <div className='menu-options'>
                <NavLink to='/' end>Cardápio</NavLink>
                |
                {role === 'visitant' &&  <NavLink to='/login'>Entrar</NavLink>}
                {role === 'admin' &&  <NavLink to='/painel'>Painel</NavLink>}
                {role === 'client' && <NavLink to ='/' onClick={() => setRole('visitant')}>Sair</NavLink> }
                
                
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBarHome