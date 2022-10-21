import React from 'react';

//css
import './NavBarHome.css';

//assets
import logo from '../assets/logo.svg';

//components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'



const NavBarHome = () => {
  return (
    <Navbar className='bg-nav'>
        <Container>
            <NavLink to='/'><Navbar.Brand><img src={logo} alt="FOME logo" className='logo'/></Navbar.Brand></NavLink>
            <div className='menu-options'>
                <NavLink to='/' end>Cardápio</NavLink>
                |
                <NavLink to='/login'>Entrar</NavLink>
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBarHome