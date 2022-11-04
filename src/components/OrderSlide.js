import React from 'react'

import './OrderSlide.css';

const OrderSlide = ({ length }) => {

  return (
    <div className='order-slide'>
        <div className='slide-container d-flex flex-column'>
            <div 
                className='slide-content d-flex justify-content-between align-items-center'>
                <h2>X-Ratão</h2>
                <h3>23:05</h3>
            </div>
            <div 
                className='slide-content d-flex justify-content-between align-items-center'>
                <h2>X-Ratão</h2>
                <h3>23:05</h3>
            </div>
            <div 
                className='slide-content d-flex justify-content-between align-items-center'>
                <h2>X-Ratão</h2>
                <h3>23:05</h3>
            </div>
            <div 
                className='slide-content d-flex justify-content-between align-items-center'>
                <h2>X-Ratão</h2>
                <h3>23:05</h3>
            </div>
            <div 
                className='slide-content d-flex justify-content-between align-items-center'>
                <h2>X-Ratão</h2>
                <h3>23:05</h3>
            </div>
        </div>
    </div>
  )
}

export default OrderSlide