
import React, { useState } from 'react';
import { CalendarIcon, ChevronDownIcon, SearchIcon, DownloadIcon, SendIcon, DeleteIcon, DotsHorizontalIcon, LeftArrowIcon, RightArrowIcon } from '../components/icons/Icons';
import { TopProductData, InboxMessageData } from '../types';
import DonutChart from '../components/DonutChart';


const StatCard: React.FC<{ title: string; amount: string; detail: string }> = ({ title, amount, detail }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{amount}</p>
                <p className="text-xs text-gray-400 mt-2">{detail}</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-md">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
            </div>
        </div>
    </div>
);

const mockTopProducts: TopProductData[] = [
    { name: 'Apple Watch Series 7', image: 'https://picsum.photos/seed/watch1/40/40', category: 'Electronics', price: 269, clicks: 22 },
    { name: 'Apple Watch Series 7', image: 'https://picsum.photos/seed/watch2/40/40', category: 'Electronics', price: 269, clicks: 22 },
    { name: 'Apple Watch Series 7', image: 'https://picsum.photos/seed/watch3/40/40', category: 'Electronics', price: 269, clicks: 22 },
];

const mockInboxMessages: InboxMessageData[] = [
    { id: '1', sender: 'Musharod Chowdury', subject: 'Some note & lorem in some form.', date: '17 Oct, 2024', read: false },
    { id: '2', sender: 'Naimur Rahman', subject: 'Lorem ipsum alteration in some form.', date: '25 Nov, 2024', read: false },
    { id: '3', sender: 'Shafiq Hammad', subject: 'Lorem available alteration in some form.', date: '25 Nov, 2024', read: true },
    { id: '4', sender: 'Alex Semuyel', subject: 'Lorem ipsum available in some form.', date: '25 Nov, 2024', read: true },
    { id: '5', sender: 'Jhon Smith', subject: 'available alteration in some form.', date: '25 Nov, 2024', read: true },
];

const visitorData = [
    { name: 'Desktop', value: 65, color: '#0d9488' }, // teal-600
    { name: 'Mobile', value: 45, color: '#f97316' }, // orange-500
    { name: 'Tablet', value: 34, color: '#2dd4bf' }, // teal-400
    { name: 'Unknow', value: 12, color: '#f59e0b' }  // amber-500
];

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'incoming' | 'done'>('incoming');

    return (
        <div>
            {/* Header Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard title="Total Saldo Midtrans" amount="Rp. 2,909,000,0" detail="1,6k pesanan" />
                <StatCard title="Pendapatan Bulan ini" amount="Rp. 377,000,00" detail="210 pesanan" />
                <StatCard title="Pendapatan Hari ini" amount="Rp. 10,777,00" detail="33 pesanan" />
            </div>

            {/* Analytics and Top Products */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Visitors Analytics</h3>
                        <button className="text-sm text-gray-600 border rounded-md px-3 py-1 flex items-center">
                            Monthly <ChevronDownIcon className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <DonutChart data={visitorData} visitors={2548} />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 bg-white px-3 py-1 text-xs font-semibold text-green-600 border border-green-200 rounded-full">20.93%</div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {visitorData.map(item => (
                                <div key={item.name} className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">{item.name}</p>
                                        <p className="text-xs text-gray-500">{item.value}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Top Product Interest</h3>
                    <div className="text-xs text-gray-400 uppercase grid grid-cols-4 gap-2 mb-2 px-2">
                        <span>Product Name</span>
                        <span>Category</span>
                        <span>Price</span>
                        <span className="text-right">Click</span>
                    </div>
                    <div className="space-y-2">
                        {mockTopProducts.map((product, index) => (
                            <div key={index} className="grid grid-cols-4 gap-2 items-center text-sm p-2 rounded-md hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                    <img src={product.image} alt={product.name} className="w-8 h-8 rounded-md object-cover" />
                                    <span className="text-gray-800 font-medium">{product.name}</span>
                                </div>
                                <span className="text-gray-500">{product.category}</span>
                                <span className="text-gray-800 font-medium">${product.price}</span>
                                <span className="text-gray-500 text-right">{product.clicks}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full bg-teal-500 text-white mt-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                        Kelola Produk
                    </button>
                </div>
            </div>

            {/* Bantuan Pengguna */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                         <div className="flex border border-gray-200 rounded-lg p-0.5">
                            <button onClick={() => setActiveTab('incoming')} className={`px-4 py-1.5 rounded-md text-sm font-medium ${activeTab === 'incoming' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Pertanyaan Masuk</button>
                            <button onClick={() => setActiveTab('done')} className={`px-4 py-1.5 rounded-md text-sm font-medium ${activeTab === 'done' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Selesai</button>
                         </div>
                         <div className="flex items-center space-x-1 text-gray-500">
                             <button className="p-2 hover:bg-gray-100 rounded-md"><DownloadIcon className="w-5 h-5"/></button>
                             <button className="p-2 hover:bg-gray-100 rounded-md"><SendIcon className="w-5 h-5"/></button>
                             <button className="p-2 hover:bg-gray-100 rounded-md"><DeleteIcon className="w-5 h-5"/></button>
                             <button className="p-2 hover:bg-gray-100 rounded-md"><DotsHorizontalIcon className="w-5 h-5"/></button>
                         </div>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon className="h-4 w-4 text-gray-400" />
                        </span>
                        <input type="text" placeholder="Search for Pengguna, email, address..." className="w-full md:w-64 pl-9 pr-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500"/>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-3 w-12"><input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" /></th>
                                <th className="px-4 py-3 font-medium text-gray-500">Sender</th>
                                <th className="px-4 py-3 font-medium text-gray-500">Subject</th>
                                <th className="px-4 py-3 font-medium text-gray-500 text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockInboxMessages.map(msg => (
                                <tr key={msg.id} className={`border-b hover:bg-gray-50 ${!msg.read ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                                    <td className="px-4 py-3"><input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" /></td>
                                    <td className="px-4 py-3">{msg.sender}</td>
                                    <td className="px-4 py-3">{msg.subject}</td>
                                    <td className="px-4 py-3 text-right">{msg.date}</td>
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

export default Dashboard;
