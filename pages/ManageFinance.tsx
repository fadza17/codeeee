
import React from 'react';
import { ChevronDownIcon, LeftArrowIcon, RightArrowIcon } from '../components/icons/Icons';
import { FinanceData } from '../types';

const mockFinanceData: FinanceData[] = [
    { id: 'B010', umkm: 'Basreng bakar by Hilni', totalProducts: 3, balance: 120000, disbursement: 120000, bank: 'Mandiri', accountNumber: '1020938091', date: '20/20/2025', status: 'Setuju' },
    // Add more mock data if needed
];

const ManageFinance: React.FC = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Kelola Keuangan</h2>
                <div className="text-sm text-gray-500 mt-1">
                    <span className="text-gray-400">Dashboard</span> / Kelola Produk
                </div>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Request Pencairan dana</h3>
                <div className="flex items-center space-x-4">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors flex items-center space-x-2">
                        <span>Tambah Pencairan Dana Manual</span>
                    </button>
                    <div className="relative">
                        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 w-48 justify-between">
                            <span>Request Pencairan Dana</span>
                            <ChevronDownIcon className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs">
                        <tr>
                            <th className="px-6 py-3">ID Pencairan</th>
                            <th className="px-6 py-3">UMKM</th>
                            <th className="px-6 py-3">Total Produk</th>
                            <th className="px-6 py-3">Saldo</th>
                            <th className="px-6 py-3">Pencairan</th>
                            <th className="px-6 py-3">Bank</th>
                            <th className="px-6 py-3">Rekening</th>
                            <th className="px-6 py-3">Tanggal</th>
                            <th className="px-6 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {mockFinanceData.map((req) => (
                            <tr key={req.id} className="bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{req.id}</td>
                                <td className="px-6 py-4">{req.umkm}</td>
                                <td className="px-6 py-4">{req.totalProducts}</td>
                                <td className="px-6 py-4">Rp. {req.balance.toLocaleString('id-ID')}</td>
                                <td className="px-6 py-4">Rp. {req.disbursement.toLocaleString('id-ID')}</td>
                                <td className="px-6 py-4">{req.bank}</td>
                                <td className="px-6 py-4">{req.accountNumber}</td>
                                <td className="px-6 py-4">{req.date}</td>
                                <td className="px-6 py-4">
                                    <button className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                                        {req.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                <p>1-5 of 29</p>
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                        <LeftArrowIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-md bg-teal-600 text-white">
                        <RightArrowIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ManageFinance;
