import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

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

const Home = () => {
  const url = 'https://murmuring-forest-23300.herokuapp.com/http://fomeback1-env.eba-fm3wqqc8.sa-east-1.elasticbeanstalk.com/product/find-all';
  const { data: products, loading, error } = useFetch(url)
  const [ filter, setFilter ] = useState('todos');
  const [ openCar, setOpenCar ] = useState(false)

  const handleOpenCar = () => {
    if(openCar === true) {
      setOpenCar(false);
    } else {
      setOpenCar(true);
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
          <div className='car'>
            <h3 className='text-center text-light mt-5'>Pedidos</h3>
            <div className="car-container d-flex flex-column justify-content-center align-items-center">
              <div className="itens">
                
              </div>
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
            {!loading && products.map((product) => {if (filter === 'all'){
              return (
                <Col className='col-xl-3 col-lg-4 col-md-6 col-10 offset-1 offset-md-0 mb-3'>
                            <ProductCard key={product.id}
                         photo={product.photo}
                         name={product.name}
                         price={product.price}
                         description={product.descricao}
                         ingredients={product.ingredients} />
                </Col>
            )
            } else if (filter === product.category) {
              return (
              <Col className='col-xl-3 col-lg-4 col-md-6 col-10 offset-1 offset-md-0 mb-3'>
                         <ProductCard key={product.id}
                         photo={product.photo}
                         name={product.name}
                         price={product.price}
                         description={product.descricao}
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