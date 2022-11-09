import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';

import './Admin.css' 

import Row from 'react-bootstrap/esm/Row';
import Order from '../../components/Order';
import Col from 'react-bootstrap/Col';
import OrderSlide from '../../components/OrderSlide';


const Admin = () => {
  const [orders, setOrders] = useState([{
    'id': 1,
    'table': '00',
    'hour': '21:30',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 2,
    'table': '01',
    'hour': '21:34',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 3,
    'table': '02',
    'hour': '21:37',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 4,
    'table': '03',
    'hour': '21:42',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 5,
    'table': '05',
    'hour': '21:47',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 6,
    'table': '06',
    'hour': '21:53',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 7,
    'table': '07',
    'hour': '21:59',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 8,
    'table': '08',
    'hour': '22:02',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 9,
    'table': '09',
    'hour': '22:12',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  },
  {
    'id': 10,
    'table': '10',
    'hour': '22:22',
    'product': 'X-Ratão',
    'ingredients': ['pão', 'hamburguer', 'cheedar', 'alface', 'tomate'],
  }]);

  const [ordersNotSlider, setOrdersNotSlider] = useState([]);

  useEffect(() => {
    if(orders.length > 8){
      setOrdersNotSlider(orders.slice(0, 7));
    } else {
      setOrdersNotSlider(orders.slice(0, 8));
    }
  }, [orders]);

  return (
    <div className='pedidos-admin d-flex'>
      <SideMenu page='pedidos'/>

      <aside className='pedidos-container'>
        <Row className='d-flex'>
          
          {ordersNotSlider && ordersNotSlider.map((order) => (<Col 
                                    className='col-12 col-md-6 col-lg-3 mb-3'
                                    key={order.id}>
                                    <Order id={order.id} table={order.table} hour={order.hour} ingredients={order.ingredients} product={order.product} />
                                  </Col>))}
    
            {orders.length > 8 && (<Col className='col-12 col-md-6 col-lg-3 mb-3'><OrderSlide orders={orders}/></Col>)}    
          </Row>
      </aside>
    </div>
  )
}

export default Admin