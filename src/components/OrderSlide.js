import React, { useEffect, useState } from 'react'

import './OrderSlide.css';

const OrderSlide = ({ orders }) => {
    const [newOrders, setNewOrders] = useState([]);
    
    useEffect(() => {
       setNewOrders(orders.slice(7));
    }, [orders]);

  return (
    <div className='order-slide'>
        <div className='slide-container d-flex flex-column'>
            {newOrders && newOrders.map((order) => (
                                    <div 
                                        key={order.id}
                                        className='slide-content d-flex justify-content-between align-items-center'>
                                        <h2>{order.product}</h2>
                                        <h3>{order.hour}</h3>
                                    </div>
            ))}
        </div>
    </div>
  )
}

export default OrderSlide