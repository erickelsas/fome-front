import { React, useState, useEffect } from 'react';

import './Attendant.css';

import NavBarHome from '../../components/NavBarHome';
import OrderAttendant from '../../components/OrderAttendant';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const Attendant = () => {
  const [ordersAttendant, setOrderAtt] = useState([{
    'id': 1,
    'table': '00',
    'hour': '21:30',
    'products': 'X-Ratão',
    'price': '39,90',
  },
  {
    'id': 2,
    'table': '01',
    'hour': '21:34',
    'products': 'X-Ratão, coca 2L',
    'price': '39,90',
  }]);

  const [orderAttendant] = useState([]);


  return (
    <div className='attendant'>
      <NavBarHome><h1>Finalizar pedidos</h1></NavBarHome>
        <Container className='waiter-container w-100 d-flex flex-column mt-4'>
          <Row className='w-100'>
            {ordersAttendant.map((orderAtt, i) => (<Col className='col-12 col-md-6 col-lg-3 mb-3' key={i}>
            <OrderAttendant id={orderAtt.id} table={orderAtt.table} hour={orderAtt.hour} products={orderAtt.products} price={orderAtt.price}/>
            </Col>))}
          </Row>
        </Container>
    </div>
  )
}

export default Attendant;