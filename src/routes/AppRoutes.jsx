import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import MealPlans from '../pages/MealPlans';
import NutritionInfo from '../pages/NutritionInfo';
import ClientManager from '../pages/ClientManager';
import Pricing from '../pages/Pricing';
import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/meal-plans"
        element={
          <PrivateRoute>
            <MealPlans />
          </PrivateRoute>
        }
      />
      <Route
        path="/nutrition"
        element={
          <PrivateRoute>
            <NutritionInfo />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <PrivateRoute>
            <ClientManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/pricing"
        element={
          <PrivateRoute>
            <Pricing />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
