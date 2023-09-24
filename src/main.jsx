import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/home.jsx'
import Contato from './routes/contato.jsx'
import Sobre from './routes/sobre.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
