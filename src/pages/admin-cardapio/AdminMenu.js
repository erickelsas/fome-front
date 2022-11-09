import React, { useState } from 'react';

import './AdminMenu.css';

import SideMenu from '../../components/SideMenu';
import ProductCard from '../../components/ProductCard';
import Filter from '../../components/Filter';
import MenuContent from '../../components/MenuContent';

const AdminMenu = () => {
    const [ filter, setFilter ] = useState('todos');

    const [ products, setProducts ] = useState([{id: 1, name: 'X-Ratão', photo: '', price: '19.99', description: 'teste', ingredients: ['Pão', 'Cheedar']}, {id: 2, name: 'X-Cobrão', photo: '', price: '19.99', description: 'teste', ingredients: ['Pão', 'Cheedar']}])
    
    const [ productCardExhibition, setProductCardExhibition ] = useState(products[0]);
  return (
    <div className='admin-menu'>
        <SideMenu page='cardapio'/>
        <aside className='admin-menu-board d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-center align-items-lg-start'>
            <div className='col-10 col-lg-5 d-flex flex-column justify-content-between align-items-lg-start align-items-center'>
             <div className='w-100 d-flex justify-content-center align-items-center text-light mt-3'>
                    <h1>Produtos</h1>
                </div>
                <div className="filter">
                    <Filter filter={filter} setFilter={setFilter}/>
                </div>
                <div className="menu-container">
                    {products && products.map((product) => <MenuContent 
                                                                key={product.id} 
                                                                product={product} 
                                                                setProductCardExhibition={setProductCardExhibition} 
                                                                active={product === productCardExhibition ? true:false}/>)}
                </div>
            </div>

            <div className='col-10 col-lg-7 d-flex flex-column justify-content-between align-items-end h-100'>
                <div className="buttons-container d-flex justify-content-center align-items-center flex-wrap">
                    <button>Adicionar produto</button>
                    <button>Adicionar categoria</button>
                </div>
                <div className="card-container d-flex justify-content-center align-items-center justify-content-lg-end">
                    {productCardExhibition && <ProductCard
                        id={productCardExhibition.id} 
                        photo={productCardExhibition.photo} 
                        name={productCardExhibition.name} 
                        price={productCardExhibition.price} 
                        description={productCardExhibition.description}
                        ingredients={productCardExhibition.ingredients}
                        />}
                </div>
            </div>
        </aside>
    </div>
  )
}

export default AdminMenu