import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Err from './Err.jsx';
import Layout from './Layout.jsx';
import Contact from './Contact.jsx';
import Expensive from './Expensive.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/exp' element={<Expensive/> } />
      <Route path='*' element={<Err />} />

      </Route>
    </Routes>
    </BrowserRouter>

 </>
)
