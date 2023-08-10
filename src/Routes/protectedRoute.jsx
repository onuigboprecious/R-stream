// ProtectedRoute.js

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Auth/SupabaseAuth';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    const user = supabase.auth.user();
    return user !== null;
  };

  if (!isAuthenticated) {
    return navigate('/Login');
  }

  return children;
};

export default ProtectedRoute;
