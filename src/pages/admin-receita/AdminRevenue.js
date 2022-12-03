import React, { useContext, useEffect, useState } from 'react';

import SideMenu from '../../components/SideMenu';
import { RoleContext } from '../../context/RoleContext';
import { RoutesContext } from '../../context/RoutesContext';

import './AdminRevenue.css';

const AdminRevenue = () => {
    const [filter, setFilter] = useState('mês');
    const [ loading, setLoading] = useState(false);

    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    const finalDate = `${currentYear}-${currentMonth}-${today}`;

    const [value, setValue] = useState(0);

    const { urls } = useContext(RoutesContext);
    const { token } = useContext(RoleContext);

    useEffect(() => {
        const fetchValue = async () => {
            const filterDate = () => {
                setLoading(true);

                if(filter === 'mês'){
                    return `${currentYear}-${currentMonth-1}-${today}`
                }
    
                if(filter === 'semestre'){
                    return `${currentYear}-${currentMonth-6}-${today}`
                }
            
                if(filter === 'ano'){
                    return `${currentYear-1}-${currentMonth-1}-${today}`
                }
            }
     
            const objDate = {
                iniDate: filterDate(),
                finalDate,
            }

            const res = await fetch(`${urls.table}balance-sheet`, {method: "POST", headers:{"Content-Type":"application/json", "Authorization": `Bearer ${token}`}, body: JSON.stringify(objDate)});
            const json = await res.json();

            setValue(json.result);

            setLoading(false);
        }

        fetchValue();
    }, [filter, currentMonth, currentYear, finalDate, today, urls.table, token]);

  return (
    <div className='admin-revenue'>
        <SideMenu page='receita'/>
        <aside className='admin-revenue-board d-flex flex-column flex-lg-row justify-content-center'>
            <div className="dashboard col-12 col-md-8 col-lg-5 offset-lg-1 mb-4">
                <h1>Dashboard</h1>
                <div className='receita'>
                    <h2 className='text-center'>Receita do último</h2>
                    <div className="filtro">
                        <button 
                            className={filter === 'mês' ? "filter-option active" : "filter-option"} 
                            onClick={() => {setFilter('mês');}}>
                                mês</button>
                        <button 
                            className={filter === 'semestre' ? "filter-option active" : "filter-option"} 
                            onClick={() => {setFilter('semestre');}}>
                                semestre</button>
                        <button 
                            className={filter === 'ano' ? "filter-option active" : "filter-option"} 
                            onClick={() => {setFilter('ano');}}>
                                ano</button>
                    </div>
                    <h2 className='display-3 valor'>R${value},00</h2>
                </div>
                <div className='grafico'>

                </div>
            </div>
            <div className="mais-vendidos col-12 col-md-8 col-lg-5 offset-lg-1">
                <h1>Mais vendidos</h1>
                <div className="mais-vendidos-container">
                    
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>

                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                    <div className="card-mais-vendido">
                        <div className='titulo'>
                            <h3>X-Ratão</h3>
                        </div>
                        <div className='quantidade'>
                            <h3>30</h3>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}

export default AdminRevenue