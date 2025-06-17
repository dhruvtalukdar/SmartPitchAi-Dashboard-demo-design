import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { UserMenu } from '@/components/layout/UserMenu';
import { HomePage } from '@/pages/HomePage';
import { LeadsPage } from '@/pages/LeadsPage';
import { EmailSequencesPage } from '@/pages/EmailSequencesPage';
import { CompanyResearchPage } from '@/pages/CompanyResearchPage';
import { AIAssistantPage } from '@/pages/AIAssistantPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { IntegrationsPage } from '@/pages/IntegrationsPage';
import { LoginPage } from '@/pages/LoginPage';
import { UnauthorizedPage } from '@/pages/UnauthorizedPage';
import { UserRole } from '@/types/auth';
import { useState } from 'react';
import './App.css';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Desktop Header with User Menu */}
        <div className="hidden lg:flex items-center justify-end h-16 px-6 bg-white border-b border-gray-200">
          <UserMenu />
        </div>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Member, UserRole.Manager, UserRole.Admin]}>
                  <HomePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/leads" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Member, UserRole.Manager, UserRole.Admin]}>
                  <LeadsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/email-sequences" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Member, UserRole.Manager, UserRole.Admin]}>
                  <EmailSequencesPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/company-research" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Member, UserRole.Manager, UserRole.Admin]}>
                  <CompanyResearchPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ai-assistant" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Member, UserRole.Manager, UserRole.Admin]}>
                  <AIAssistantPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Manager, UserRole.Admin]}>
                  <AnalyticsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Admin]}>
                  <SettingsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/integrations" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.Admin]}>
                  <IntegrationsPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;