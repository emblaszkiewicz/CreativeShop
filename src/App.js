import './styles/global.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Home from '../src/components/views/Home/Home';
import Shop from '../src/components/views/Shop/Shop';
import About from '../src/components/views/About/About';
import Contact from '../src/components/views/Contact/Contact';
import Login from '../src/components/views/Login/Login';
import Favorites from '../src/components/views/Favorites/Favorites';
import ProductPage from '../src/components/views/ProductPage/ProductPage';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
