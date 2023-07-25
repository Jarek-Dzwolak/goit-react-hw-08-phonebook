import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './phonebook/Layout/Layout';
import RestrictedRoute from '../components/phonebook/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/phonebook/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../Pages/Register/Register'));
const LoginPage = lazy(() => import('../Pages/Login/Login'));
const ContactsPage = lazy(() => import('../Pages/ContactBook/ContactBook'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
