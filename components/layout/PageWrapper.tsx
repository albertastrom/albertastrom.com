import React from 'react';
import Header from '../header/header';
import Footer from '../footer/Footer';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased sm:bg-sky-400 sm:px-2.5 sm:py-2.5 max-sm:border-t-4 max-sm:border-t-sky-400 bg-slate-50">
      <div className="flex-1 bg-slate-50 sm:min-h-[calc(100vh-1.25rem)] sm:rounded-xl shadow-sm p-4 sm:pt-8 flex flex-col">
        <div className="max-w-screen-md mx-auto flex-1 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
