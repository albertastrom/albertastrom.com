import Header from '../components/header/header';

const NotFoundPage = () => {
  return (
    <div className="antialiased sm:bg-sky-400 sm:px-2.5 sm:py-2.5 max-sm:border-t-4 max-sm:border-t-sky-400 bg-slate-50">
      <div className="bg-slate-50 sm:min-h-[calc(100vh-1.25rem)] sm:rounded-xl shadow-sm p-4 sm:pt-8">
        <div className="max-w-screen-md mx-auto">
          <Header />
          <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
            <div className="text-center">
              <h1 className="text-9xl font-bold">404</h1>
              <p className="text-2xl">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
