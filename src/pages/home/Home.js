import React, { useState, useContext } from 'react';
import { useFetchCRUD } from '../../hooks/useFetchCRUD';

import './Home.css';

import wave from '../../assets/wave.svg';
import xrataoHome from '../../assets/x-ratao.png'

import { Cart } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/esm/Container';
import NavBarHome from '../../components/NavBarHome';
import ProductCard from '../../components/ProductCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filter from '../../components/Filter';
import FooterHome from '../../components/FooterHome';
import CarCard from '../../components/CarCard';
import { OrderContext } from '../../context/OrderContext';
import { RoleContext } from '../../context/RoleContext';
import { RoutesContext } from '../../context/RoutesContext';

const Home = () => {
  const { urls } = useContext(RoutesContext);
  const { data: products, loading, error, httpConfig } = useFetchCRUD(urls.product);
  const [ filter, setFilter ] = useState('todos');
  const [ openCar, setOpenCar ] = useState(false);
  const { order, total, setOrder, setTotal } = useContext(OrderContext);
  const { role, username } = useContext(RoleContext);

  const [id, setId] = useState(0);

  const handleOpenCar = () => {
    if(openCar === true) {
      setOpenCar(false);
    } else {
      setOpenCar(true);
    }
  }

  const realizarPedido = async () => {
    if(role !== 'visitant'){
       let res = await fetch(`${urls.user}find-by-username/${username}`);
       let json = await res.json();

       setId(json.id);

      const makeOrderObj = {
        id: null,
        totalValue: total,
        EPaymentMethod: null,
        newIdProductOrder: order.map((o) => o.id),
        table_id: {
          id,
        }
      };

      res = await fetch(`${urls.table}/make-order/`, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(makeOrderObj)});
      json = await res.json();
    } else {
        alert('Você precisa estar logado!');
    }
}

  return (
    <div className='home'>
        <NavBarHome/>
        <div className='wave-container'>
          <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <h2 className='slogan text-center w-75'>Ferramenta Online para Manutenção de E-cardápios</h2>
            <img src={xrataoHome} alt="X-Ratão!" className='lanche' />
          </div>
          <img src={wave} alt="Onda de fundo" className='wave'/>
        </div>

        <aside className={openCar ? 'order d-flex flex-row-reverse justify-content-end open' : 'order d-flex flex-row-reverse justify-content-end'}>
          <div className='car d-flex flex-column justify-content-between align-items-center'>
            <h3 className='text-center text-light mt-3 mb-3'>Pedidos</h3>
            <div className="car-container d-flex flex-column justify-content-start align-items-center">
              <div className='itens'>
                {order && order.map((product) => (
                  <CarCard key={product.num}
                           id={product.id}
                           num={product.num}
                           photo={product.photo} 
                           name={product.name} 
                           price={product.price} 
                           description={product.description}/>
                ))}
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-10'>
              <div className='col-6'>
                <h5 className='text-white'>Total: R$ {Number.isInteger(total) ? total : total.toFixed(2)}</h5>
              </div>
              <button className='pedir mb-3' onClick={realizarPedido}>Efetuar pedido!</button>
            </div>
          </div>

          <button className='icon d-flex justify-content-start align-items-center p-2' onClick={handleOpenCar}>
            <Cart color='#f2f3f4' size={36}/>
          </button>
        </aside>    
        <Container id='container-teste'>
          <h1 className='d-flex justify-content-center align-items-center text-white cardapio-title'>Cardápio</h1>
          <Filter filter={filter} setFilter={setFilter}/>
            <Row>
            {loading && 
              (<div className='d-flex w-100 justify-content-center align-items-center'>
                <div className='loading'></div>
              </div>)}
            {(!loading && products.length === 0 && (<p className='w-100 text-center text-light'>Houve um problema! Os produtos não podem ser carregados, tente novamente!</p>)) || error}
            {!loading && products.map((product) => {if (filter === 'todos'){
              return (
                <Col key={product.id} className='col-xl-3 col-lg-4 col-md-6 col-10 offset-1 offset-md-0 mb-3'>
                            <ProductCard key={product.id}
                                         id = {product.id}
                                         photo={product.photo}
                                         name={product.name}
                                         price={product.price}
                                         description={product.description}
                                         ingredients={product.ingredients} />
                </Col>
            )
            } else if (filter === product.category.name) {
              return (
              <Col key={product.id} className='col-xl-3 col-lg-4 col-md-6 col-10 offset-1 offset-md-0 mb-3'>
                         <ProductCard key={product.id}
                                      id = {product.id}
                                      photo={product.photo}
                                      name={product.name}
                                      price={product.price}
                                      description={product.description}
                                      ingredients={product.ingredients} />
                </Col>
              )
            }
            return (null);
            })}
            </Row>
        </Container>
        <FooterHome />
    </div>
  )
}

export default Home