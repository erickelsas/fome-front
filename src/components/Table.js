import React, { useContext } from 'react'
import { RoleContext } from '../context/RoleContext';

import './Table.css'

const Table = ({ table }) => {
    const { role } = useContext(RoleContext);

    const verSenha = () => {

    }

    const gerarSenha = () => {

    }

    const delTable = () => {

    }
    
  return (
    <div className='table-component d-flex flex-column justify-content-center align-items-center p-3'>
        <div>
            <h2>Mesa { table.number }</h2>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <button onClick={verSenha} className='btn-outline'>Ver senha</button>
            <button onClick={gerarSenha} className='btn-outline'>Gerar senha</button>
            { role === 'ADMIN_ROLE' && <button onClick={delTable} className='btn-red'>Apagar mesa</button>}
        </div>
    </div>
  )
}

export default Table