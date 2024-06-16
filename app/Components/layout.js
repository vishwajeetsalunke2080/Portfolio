import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
