import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

import './FooterHome.css'

const FooterHome = () => {
  return (
    <footer className='footer-home d-flex justify-content-center align-items-center'>
        <Container>
          <div className='d-flex flex-direction-column justify-content-between flex-direction-lg-row align-items-center'>
              <div>
                <h4 className='direitos'>Todos os direitos reservados</h4>
              </div>
              <div className='contatos-politica'>
                  <Link to='/privacy'>Política de privacidade</Link>
                  <h5>restaurante@email.com</h5>
              </div>
            </div>
        </Container>
    </footer>
  )
}

export default FooterHome