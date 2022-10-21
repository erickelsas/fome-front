import React from 'react'

import './Filter.css'

const Filter = ({filter, setFilter}) => {

  return (
    <div className='filter-bg'>
        <ul>
            <li className={filter === 'todos' ? 'active' : ''} onClick={() => {setFilter('todos');}}>Todos</li>
            <li className={filter === 'lanche' ? 'active' : ''} onClick={() => {setFilter('lanche');}}>Lanches</li>
            <li className={filter === 'porção' ? 'active' : ''} onClick={() => {setFilter('porção');}}>Porções</li>
            <li className={filter === 'bebida' ? 'active' : ''} onClick={() => {setFilter('bebida');}}>Bebidas</li>
        </ul>
    </div>
  )
}

export default Filter