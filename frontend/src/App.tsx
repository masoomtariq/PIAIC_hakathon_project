import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setAuth } from './store/authSlice';
import { authAPI } from './api/client';
import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import './styles/index.css';

const AppContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isAuthenticated) {
      authAPI
        .getMe()
        .then((response) => {
          dispatch(setAuth({ user: response.data.user, token }));
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage isSignup={false} />} />
        <Route path="/signup" element={<LoginPage isSignup={true} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="p-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-600 mt-2">Coming soon...</p>
              </div>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
