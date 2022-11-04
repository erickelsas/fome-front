import React from 'react'

import './Order.css'

const Order = () => {
  return (
    <div className='order d-flex flex-column align-items center'>
        <div className='w-100 d-flex justify-content-between align-items-center header p-3'>
            <h1 className='mb-0 mt-0'>Mesa 00</h1>
            <h2 className='mb-0 mt-0'>21:30</h2>
        </div>
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center body p-3'>
            <div className='d-flex flex-column justify-content-start w-100'>
                <h1>X-Ratão</h1>
                <h3>Ingredientes:</h3>
            </div>
            <p>Pão, hamburguer, cheedar, bacon, alface, tomate</p>
        </div>
        <div className='w-100 d-flex justify-content-end align-items-end footer p-3'>
            <button>Finalizar pedido</button>
        </div>
    </div>
  )
}

export default Order