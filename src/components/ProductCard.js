import React, {useContext} from 'react'
import { OrderContext } from '../context/OrderContext'
import './ProductCard.css'

const ProductCard = ({id, photo, name, price, description, ingredients}) => {
    const {order, setOrder, total, setTotal} = useContext(OrderContext);

    const handleClick = () => {
        setOrder(prevOrder => [...prevOrder, { 'num': order.length, id, photo, name, price, description, ingredients }]);
        setTotal(total + price);
    }

  return (
    <div className='product-card'>
        <div className='d-flex justify-content-center align-items-center card-top'>
            <img src={photo} alt={`Imagem ilustrativa de ${name}`} />
        </div>
        <div className='card-data'>
            <div className='card-title'>
                <h2>{name}</h2>
                <h2>R${price}</h2>
            </div>
            <p className='card-desc'>{description}</p>
            <div className='card-ing-car'>
                <p>{ingredients}</p>
                <button onClick={handleClick}>Carrinho</button>
            </div>
            <button className='col-12 btn-order'>Efetuar pedido</button>
        </div>
    </div>
  )
}

export default ProductCard