
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Page, UserSubPage } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  setActivePage: (page: Page) => void;
  activeSubPage: UserSubPage;
  setActiveSubPage: (subPage: UserSubPage) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage, activeSubPage, setActiveSubPage }) => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar activePage={activePage} setActivePage={setActivePage} activeSubPage={activeSubPage} setActiveSubPage={setActiveSubPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
