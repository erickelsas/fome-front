import { React, useState, useEffect } from 'react';

import './Kitchen.css';

import NavBarHome from '../../components/NavBarHome';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Order from '../../components/Order';
import Col from 'react-bootstrap/Col';
import OrderSlide from '../../components/OrderSlide';

const Kitchen = () => {
  const [orders, setOrders] = useState([{
    'id': 1,
    'table': '00',
    'hour': '21:30',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 2,
    'table': '01',
    'hour': '21:34',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 3,
    'table': '02',
    'hour': '21:37',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 4,
    'table': '03',
    'hour': '21:42',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 5,
    'table': '05',
    'hour': '21:47',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 6,
    'table': '06',
    'hour': '21:53',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 7,
    'table': '07',
    'hour': '21:59',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 8,
    'table': '08',
    'hour': '22:02',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 9,
    'table': '09',
    'hour': '22:12',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml']
  },
  {
    'id': 10,
    'table': '10',
    'hour': '22:22',
    'products': ['X-Ratão', 'Batata-frita pequena', 'Coca-cola 600ml',]
  }]);

  const [ordersNotSlider, setOrdersNotSlider] = useState([]);

  useEffect(() => {
    if(orders.length > 8){
      setOrdersNotSlider(orders.slice(0, 7));
    } else {
      setOrdersNotSlider(orders.slice(0, 8));
    }
  }, [orders]);

  console.log(ordersNotSlider);
  return (
    <div className='kitchen'>
      <NavBarHome><h1>Pedidos</h1></NavBarHome>
      <Container className='kitchen-container w-100 d-flex flex-column justify-content-center align-items-center mt-2'>
      <Row className='w-100'>
        
      {ordersNotSlider && ordersNotSlider.map((order) => (<Col 
                                className='col-12 col-md-6 col-lg-3 mb-3'
                                key={order.id}>
                                <Order id={order.id} table={order.table} hour={order.hour} products={order.products} />
                              </Col>))}

        {orders.length > 8 && (<Col className='col-12 col-md-6 col-lg-3 mb-3'><OrderSlide orders={orders}/></Col>)}    
            

        </Row>
      </Container>
    </div>
  )
}

export default Kitchen