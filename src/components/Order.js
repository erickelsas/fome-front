import React from 'react'

import './Order.css'

const Order = ({ order }) => {

  return (
    <div className='order-component d-flex flex-column align-items center'>
        <div className='w-100 d-flex justify-content-between align-items-center header p-3'>
            <h1 className='mb-0 mt-0'>Mesa {}</h1>
            <h2 className='mb-0 mt-0'>{}</h2>
        </div>
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-start body px-3 py-2'>
            <div className='d-flex flex-column justify-content-start w-100'>
                {/* {order && order.map((product) => (<h1>{product}</h1>))} */}
            </div>
        </div>
        <div className='w-100 d-flex justify-content-end align-items-end footer p-2'>
            <button>Finalizar pedido</button>
        </div>
    </div>
  )
}

export default Order