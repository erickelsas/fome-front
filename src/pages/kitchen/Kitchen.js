import React from 'react';

import './Kitchen.css';

import NavBarHome from '../../components/NavBarHome';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Order from '../../components/Order';
import Col from 'react-bootstrap/Col';
import OrderSlide from '../../components/OrderSlide';

const Kitchen = () => {
  return (
    <div className='kitchen'>
      <NavBarHome><h1>Pedidos</h1></NavBarHome>
      <Container className='kitchen-container w-100 d-flex justify-content-center align-items-center'>
      <Row className='w-100'>
          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <Order/>
          </Col>

          <Col className='col-3 mb-3'>
            <OrderSlide length={1}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Kitchen