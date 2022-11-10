import React from 'react';
import { Pencil, Trash } from 'react-bootstrap-icons';

import './MenuContent.css';

const MenuContent = ({ product, setProductCardExhibition, active }) => {
  return (
    <button 
    className={active ? 'menu-content-component d-flex justify-content-between align-items-center activeComponent' : 'menu-content-component d-flex justify-content-between align-items-center'} 
    onClick={() => setProductCardExhibition(product)}>
        <div className='d-flex justify-content-center align-items-center'>
            <h3 className='mb-0 mt-0'>{product.name}</h3>
        </div>
        <div className='icons d-flex justify-content-between align-items-center'>
            <div className='icon-circle d-flex justify-content-center align-items-center'>
                <Pencil color='#E32424' size={24} />
            </div>
            <div className='icon-circle d-flex justify-content-center align-items-center'>
                <Trash color='#E32424' size={24}/>
            </div>
        </div>
    </button>
  )
}

export default MenuContent