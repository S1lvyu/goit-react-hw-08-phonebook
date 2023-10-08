import React, { Suspense, lazy } from 'react';
import PrivateRoutes from 'PrivateRoutes/PrivateRoutes';
import Loader from './Loader/Loader';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const LoginPage = lazy(() => import('./Login/Login'));
  const RegisterPage = lazy(() => import('./Register/Register'));
  const Contacts = lazy(() => import('./Contacts/Contacts'));

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
