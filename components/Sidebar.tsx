
import React, { useState, useEffect } from 'react';
import { Page, UserSubPage } from '../types';
import { DashboardIcon, ProductIcon, FinanceIcon, UmkmIcon, UserGroupIcon, HelpIcon, ChevronDownIcon, LogoutIcon } from './icons/Icons';
import bsiLogo from '../assets/img/iconbsi.svg';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  activeSubPage: UserSubPage;
  setActiveSubPage: (subPage: UserSubPage) => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: Page;
  isActive: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  isExpanded?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick, children, isExpanded }) => {
  const hasChildren = !!children;
  
  const baseClasses = "flex items-center px-6 py-3 text-white cursor-pointer transition-colors duration-200";
  const activeClasses = "bg-teal-700";
  const hoverClasses = "hover:bg-teal-700";
  
  return (
    <div>
        <div 
            className={`${baseClasses} ${isActive ? activeClasses : ''} ${!isActive ? hoverClasses : ''}`}
            onClick={onClick}
        >
            {icon}
            <span className="mx-4 font-medium">{label}</span>
            {hasChildren && <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />}
        </div>
        {hasChildren && isExpanded && (
            <div className="bg-teal-800/50">
                {children}
            </div>
        )}
    </div>
  );
};

const SubNavItem: React.FC<{label: string; isActive: boolean; onClick: () => void;}> = ({ label, isActive, onClick }) => {
    const baseClasses = "flex items-center pl-16 pr-6 py-2 text-sm text-white cursor-pointer transition-colors duration-200";
    const activeClasses = "bg-teal-700 font-semibold";
    const hoverClasses = "hover:bg-teal-700";

    return (
        <div className={`${baseClasses} ${isActive ? activeClasses : hoverClasses}`} onClick={onClick}>
            {label}
        </div>
    );
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, activeSubPage, setActiveSubPage }) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(activePage === 'Kelola Pengguna');
    
    useEffect(() => {
        if(activePage === 'Kelola Pengguna') {
            setIsUserMenuOpen(true);
        }
    }, [activePage]);

  return (
    <div className="w-64 bg-teal-600 flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-teal-700 px-6">
        <img src={bsiLogo} alt="BSI UMKM Center" className="h-10 w-auto" />
      </div>
      <nav className="flex-1 py-6 overflow-y-auto">
        <NavItem icon={<DashboardIcon className="h-6 w-6" />} label="Dashboard" isActive={activePage === 'Dashboard'} onClick={() => setActivePage('Dashboard')} />
        <NavItem icon={<ProductIcon className="h-6 w-6" />} label="Kelola Produk" isActive={activePage === 'Kelola Produk'} onClick={() => setActivePage('Kelola Produk')} />
        <NavItem icon={<FinanceIcon className="h-6 w-6" />} label="Kelola Keuangan" isActive={activePage === 'Kelola Keuangan'} onClick={() => setActivePage('Kelola Keuangan')} />
        <NavItem icon={<UmkmIcon className="h-6 w-6" />} label="Kelola UMKM" isActive={activePage === 'Kelola UMKM'} onClick={() => setActivePage('Kelola UMKM')} />
        <NavItem 
            icon={<UserGroupIcon className="h-6 w-6" />} 
            label="Kelola Pengguna" 
            isActive={activePage === 'Kelola Pengguna'} 
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            isExpanded={isUserMenuOpen}
        >
            <SubNavItem label="Kelola Pengguna" isActive={activeSubPage === 'Kelola Pengguna'} onClick={() => setActiveSubPage('Kelola Pengguna')} />
            <SubNavItem label="Pesanan" isActive={activeSubPage === 'Pesanan'} onClick={() => setActiveSubPage('Pesanan')} />
            <SubNavItem label="Pengiriman" isActive={activeSubPage === 'Pengiriman'} onClick={() => setActiveSubPage('Pengiriman')} />
            <SubNavItem label="Penjualan" isActive={activeSubPage === 'Penjualan'} onClick={() => setActiveSubPage('Penjualan')} />
        </NavItem>
        <NavItem icon={<HelpIcon className="h-6 w-6" />} label="Bantuan" isActive={activePage === 'Bantuan'} onClick={() => setActivePage('Bantuan')} />
      </nav>
      <div className="px-6 pb-6">
        <button className="flex items-center w-full p-3 bg-white text-teal-800 rounded-lg font-semibold text-left focus:outline-none hover:bg-gray-200 transition-colors duration-200">
            <LogoutIcon className="h-6 w-6 mr-3 text-teal-600" />
            <span className="flex-1">Keluar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;