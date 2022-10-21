import React from 'react'
import './ProductCard.css'

const ProductCard = ({photo, name, price, description, ingredients}) => {
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
                <button>Carrinho</button>
            </div>
            <button className='col-12 btn-order'>Efetuar pedido</button>
        </div>
    </div>
  )
}

export default ProductCard