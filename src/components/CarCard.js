import React from 'react';
import './CarCard.css';
import { Trash } from 'react-bootstrap-icons';

const CarCard = ({ photo, name, price, description }) => {
  return (
    <div className='d-flex justify-content-between align-items-center car-card'>
        <div className='img-bg col-3 d-flex justify-content-center align-items-center p-3'>
            <img src={photo} alt="" />
        </div>
        <div className='d-flex flex-column justify-content-center col-7 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>{name}</h3>
                <h4>R$ {price}</h4>
            </div>
            <p>{description}</p>
        </div>
        <button className='col-2'> 
            <Trash color='#e32929' size={36}/>
        </button>
    </div>
  )
}

export default CarCard