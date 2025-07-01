import React from 'react';
import Header from '../header/header';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="antialiased sm:bg-sky-400 sm:px-2.5 sm:py-2.5 max-sm:border-t-4 max-sm:border-t-sky-400 bg-slate-50">
      <div className="bg-slate-50 sm:min-h-[calc(100vh-1.25rem)] sm:rounded-xl shadow-sm p-4 sm:pt-8">
        <div className="max-w-screen-md mx-auto">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
