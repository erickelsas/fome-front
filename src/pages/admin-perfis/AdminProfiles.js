import React from 'react';

import './AdminProfiles.css';

import { ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight, Search } from 'react-bootstrap-icons'

import SideMenu from '../../components/SideMenu'
import ProfileLine from '../../components/ProfileLine';

const AdminProfiles = () => {
  return (
    <div className='admin-perfis'>
        <SideMenu page='perfis'/>
        <aside className='admin-perfis-board'>
            <div className='perfis-header'>
                <button className='add-profile'>Criar usuário</button>
                <div className='search-bar'>
                    <button>
                        <Search size={20} color='#fff'/>
                    </button>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className='table-header'>
                <div className='id-header-container d-flex justify-content-center align-items-center'>
                    <h2>ID</h2>
                </div>
                <div className='name-header-container d-flex justify-content-center align-items-center'>
                    <h2>Nome</h2>
                </div>
                <div className='cpf-header-container d-flex justify-content-center align-items-center'>
                    <h2>CPF</h2>
                </div>
                <div className='role-header-container d-flex justify-content-center align-items-center'>
                    <h2>Cargo</h2>
                </div>
                <div className='salary-header-container d-flex justify-content-center align-items-center'>
                    <h2>Salário</h2>
                </div>
                <div className='buttons-header-container'></div>
            </div>
            <div className='table-body'>
                <ProfileLine profile={{id: '0001', name: 'Erick Elsas de Freitas', cpf:'525.337.768-90', role: 'Administrador', salary: 10000 }}/>
                <ProfileLine profile={{id: '0001', name: 'Jacó Cabral de Jesus', cpf:'525.337.768-90', role: 'Garçom', salary: 2000 }}/>
                <ProfileLine profile={{id: '0001', name: 'Jacó Cabral de Jesus', cpf:'525.337.768-90', role: 'Garçom', salary: 2000 }}/>
                <ProfileLine profile={{id: '0001', name: 'Jacó Cabral de Jesus', cpf:'525.337.768-90', role: 'Garçom', salary: 2000 }}/>
                <ProfileLine profile={{id: '0001', name: 'Jacó Cabral de Jesus', cpf:'525.337.768-90', role: 'Garçom', salary: 2000 }}/>
                <ProfileLine profile={{id: '0001', name: 'Jacó Cabral de Jesus', cpf:'525.337.768-90', role: 'Garçom', salary: 2000 }}/>
            </div>
            <div className="table-footer d-flex justify-content-center align-items-center w-100">
                <button className="footer-button" disabled><ChevronDoubleLeft size={24} color='#fff'/></button>
                <button className="footer-button"><ChevronLeft size={24} color='#fff'/></button>
                <button className="footer-button">1</button>
                <button className="footer-button">2</button>
                <button className="footer-button">3</button>
                <button className="footer-button"><ChevronRight size={24} color='#fff'/></button>
                <button className="footer-button"><ChevronDoubleRight size={24} color='#fff'/></button>
            </div>
        </aside>
    </div>
  )
}

export default AdminProfiles