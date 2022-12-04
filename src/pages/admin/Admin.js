import React, { useState, useEffect, useContext } from 'react';
import SideMenu from '../../components/SideMenu';

import './Admin.css' 

import Row from 'react-bootstrap/esm/Row';
import Order from '../../components/Order';
import Col from 'react-bootstrap/Col';
import OrderSlide from '../../components/OrderSlide';
import { useFetchCRUD } from '../../hooks/useFetchCRUD';
import { RoutesContext } from '../../context/RoutesContext';
import { RoleContext } from '../../context/RoleContext';


const Admin = () => {
  const {urls} = useContext(RoutesContext);
  const { token } = useContext(RoleContext);
  const { data: orders } = useFetchCRUD(`${urls.table}find-new-orders/`, token);

  console.log(orders);

  const [ordersNotSlider, setOrdersNotSlider] = useState(orders.splice(0, 7));

  useEffect(() => {
    setOrdersNotSlider(orders.splice(0, 7));
  }, [orders]);

  return (
    <div className='pedidos-admin d-flex'>
      <SideMenu page='pedidos'/>

      <aside className='pedidos-container'>
        <Row className='d-flex'>
          {ordersNotSlider && ordersNotSlider.map((order) => (<Col 
                                    className='col-12 col-md-6 col-lg-3 mb-3'
                                    key={order.id}>
                                    <Order order={order} />
                                  </Col>))}
    
            {orders.length > 7 && (<Col className='col-12 col-md-6 col-lg-3 mb-3'><OrderSlide orders={orders}/></Col>)}    
          </Row>
      </aside>
    </div>
  )
}

export default Admin