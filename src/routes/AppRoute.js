// src/routes/AppRoute.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../views/auth/Dashboard';
import History from '../views/auth/History';
import CrossBorder from '../views/auth/CrossBorder';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crossbordertransfers" element={<CrossBorder />} />
      <Route path="/history" element={<History />} />
      {/* Default redirect to Dashboard if accessing /home */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoute;
