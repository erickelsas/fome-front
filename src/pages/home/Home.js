import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

import './Home.css';

import wave from '../../assets/wave.svg';
import xrataoHome from '../../assets/x-ratao.png'

import Container from 'react-bootstrap/esm/Container';
import NavBarHome from '../../components/NavBarHome';
import ProductCard from '../../components/ProductCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filter from '../../components/Filter';
import FooterHome from '../../components/FooterHome';

const Home = () => {
  const url = 'fome.ckd5mspy1a9b.sa-east-1.rds.amazonaws.com/product/find-all';
  const { data: products, error, httpConfig } = useFetch(url)
  const [filter, setFilter] = useState('todos');



  return (
    <div className='home'>
        <NavBarHome />
        <div className='wave-container'>
          <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <h2 className='slogan text-center w-75'>Ferramenta Online para Manutenção de E-cardápios</h2>
            <img src={xrataoHome} alt="X-Ratão!" className='lanche' />
          </div>
          <img src={wave} alt="Onda de fundo" className='wave'/>
        </div>
        <Container id='container-teste'>
          <h1 className='d-flex justify-content-center align-items-center text-white cardapio-title'>Cardápio</h1>
          <Filter filter={filter} setFilter={setFilter}/>
            <Row>
            {products && products.map((product) => {if (filter === 'all'){
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