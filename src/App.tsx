import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DealsPage from './pages/DealsPage';
import ArchivedDealsPage from './pages/ArchivedDealsPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route 
                path="/deals" 
                element={
                  <ProtectedRoute>
                    <DealsPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/archived" 
                element={
                  <ProtectedRoute>
                    <ArchivedDealsPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}