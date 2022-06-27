import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <MainLayout>
      <Routes>
        <Route path='/' /*element={< />}*/ />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
