import './styles/global.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { CssBaseline } from '@material-ui/core';

import { loadProductsRequest } from './redux/productsRedux';
import { loadBannersRequest } from './redux/bannersRedux';
import { loadCategoriesRequest } from './redux/categoriesRedux';
import { loadEmployeesRequest } from './redux/employeesRedux';
import { loadOpinionsRequest } from './redux/opinionsRedux';
import { loadBrandsRequest } from './redux/brandsRedux';

import { updateCart } from './redux/cartRedux';
import { updateFavorites } from './redux/favoritesRedux';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Home from '../src/components/views/Home/Home';
import Shop from '../src/components/views/Shop/Shop';
import About from '../src/components/views/About/About';
import Contact from '../src/components/views/Contact/Contact';
import Login from '../src/components/views/Login/Login';
import Favorites from '../src/components/views/Favorites/Favorites';
import Cart from '../src/components/views/Cart/Cart';
import ProductPage from '../src/components/views/ProductPage/ProductPage';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
    dispatch(loadBannersRequest());
    dispatch(loadCategoriesRequest());
    dispatch(loadEmployeesRequest());
    dispatch(loadOpinionsRequest());
    dispatch(loadBrandsRequest());

    if (localStorage.getItem('cart')) {
      dispatch(updateCart(JSON.parse(localStorage.getItem('cart'))));
    }
    if (localStorage.getItem('favorites')) {
      dispatch(updateFavorites(JSON.parse(localStorage.getItem('favorites'))));
    }
  });

  return (
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
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
