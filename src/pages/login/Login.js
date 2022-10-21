import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import NavBarHome from '../../components/NavBarHome';
import Container from 'react-bootstrap/Container';
import bgLogin  from '../../assets/bg-login.png';
import Form from '../../components/Form';
import { Eye, EyeSlash} from 'react-bootstrap-icons';

import './Login.css'


const Login = () => {
  const [ passType, setPassType ] = useState('password');
  const [ user, setUser] = useState('');
  const [ password, setPassword ] = useState('')

  const handleClickPass = () => {
    if(passType === 'password'){
      setPassType('text');
    } else {
      setPassType('password');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser('');
    setPassword('');
  }

  return (
    <div className='login-container'>
        <div className='d-flex'>
          <div className='col-12 col-lg-6 login-left'>
            <NavBarHome />
            <div className='login-content d-flex justify-content-center align-items-center'>
              <form className='d-flex flex-column justify-content-center' 
                    onSubmit={handleSubmit}>
                <Form name='user' value={user} setAttr={setUser}>Mesa/Usuário</Form>

                <label htmlFor="password">Senha</label>
                <div className='pass-form d-flex align-items-center w-100'>
                  <input type={passType} 
                         name='password' 
                         className='pass-camp col-10' 
                         value={password} 
                         onChange={(e) => setPassword(e.target.value)}/>

                  <div className='pass-reveal col-2 d-flex justify-content-center align-items-center' 
                       onClick={handleClickPass}>

                    {passType === 'password' ? (
                      <div>
                        <span className='visually-hidden'>Ver senha:</span>
                        <Eye color='red' size={24} alt='Ver senha'/>
                      </div>
                    ):(
                      <div>
                        <span className='visually-hidden'>Deixar de ver senha:</span>
                        <EyeSlash color='red' size={24}/>
                      </div>
                    )}

                  </div>

                </div>
                <input type="submit" value="Entrar" />
              </form>
            </div>
          </div>
          <div className='col-0 col-lg-6 login-right'>
            <img src={bgLogin} alt='' className='bg-login'></img>
          </div>
        </div>
    </div>
  )
}

export default Login