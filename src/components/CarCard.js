import React, {useContext} from 'react';
import './CarCard.css';
import { Trash } from 'react-bootstrap-icons';
import { OrderContext } from '../context/OrderContext';

const CarCard = ({ num, photo, name, price, description }) => {
    const {order, setOrder, total, setTotal} = useContext(OrderContext);
    
    const handleClick = () => {
        const newOrder = order.filter((order) => order.num !== num);
        let newTotal = 0;

        if(total - price !== 0) {
            newTotal = total - price;
        }

        setOrder(newOrder);
        setTotal(newTotal);
    }

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
        <button className='col-2' onClick={handleClick}> 
            <Trash color='#e32929' size={36}/>
        </button>
    </div>
  )
}

export default CarCard