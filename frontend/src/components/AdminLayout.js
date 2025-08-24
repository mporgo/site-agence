import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>© 2025 Kamdsolution. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default AdminLayout;