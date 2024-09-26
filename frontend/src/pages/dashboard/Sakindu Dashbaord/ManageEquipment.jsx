import React, { useState } from 'react';
import AllEquipment from '../../sakindu/Inventory';

const AdminCreateEquipment = () => {

  return (
    <div className="flex h-screen overflow-hidden">
      
      <aside className="w-64 bg-gray-800 text-white flex flex-col flex-shrink-0">
        <div className="p-4 text-xl font-bold bg-gray-900">
          Admin Dashboard
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <a href="/Equipment-dashboard" className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Manage Equipment</a>
          <a href="/Equipment-dashboard/AddEquipment" className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Add Equipment</a>
        </nav>

        <div className="p-4">
          <button className="bg-red-600 px-4 py-2 w-full rounded hover:bg-red-500">Logout</button>
        </div>
      </aside>

      
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="p-6">
          <header className="bg-white shadow p-4 rounded mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Welcome, Admin!</h2>
          </header>

          <div>
            <AllEquipment/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCreateEquipment;
