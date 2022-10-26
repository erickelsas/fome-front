import React from 'react'

import './Filter.css'

const Filter = ({filter, setFilter}) => {

  return (
    <div className='filter-bg'>
        <ul>
            <li className={filter === 'todos' ? 'active' : ''} onClick={() => {setFilter('todos');}}>Todos</li>
            <li className={filter === 'lanches' ? 'active' : ''} onClick={() => {setFilter('lanches');}}>Lanches</li>
            <li className={filter === 'porcoes' ? 'active' : ''} onClick={() => {setFilter('porcoes');}}>Porções</li>
            <li className={filter === 'bebidas' ? 'active' : ''} onClick={() => {setFilter('bebidas');}}>Bebidas</li>
        </ul>
    </div>
  )
}

export default Filter