import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { HomePage } from '@/pages/HomePage';
import { LeadsPage } from '@/pages/LeadsPage';
import { EmailSequencesPage } from '@/pages/EmailSequencesPage';
import { CompanyResearchPage } from '@/pages/CompanyResearchPage';
import { AIAssistantPage } from '@/pages/AIAssistantPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { IntegrationsPage } from '@/pages/IntegrationsPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
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
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leads" element={<LeadsPage />} />
              <Route path="/email-sequences" element={<EmailSequencesPage />} />
              <Route path="/company-research" element={<CompanyResearchPage />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;