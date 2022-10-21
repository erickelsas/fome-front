import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Privacy from './pages/privacy/Privacy'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
