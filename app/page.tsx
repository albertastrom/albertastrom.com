import  Header from '../components/header/header'
import AboutMe from '../components/content/aboutme'
import Projects from '../components/content/projects'

const HomePage = () => {
  return (
    <div className="antialiased sm:bg-sky-400 sm:px-2.5 sm:py-2.5 max-sm:border-t-4 max-sm:border-t-sky-400 bg-slate-50">
      <div className="bg-slate-50 sm:min-h-[calc(100vh-1.25rem)] sm:rounded-xl shadow-sm p-4 sm:pt-8 pb-36">
        <div className="flex justify-center w-full">
          <div className="max-w-screen-sm mx-auto">

            <Header/>
            <AboutMe/>
            <Projects/>
          

            <div>
              <img
                src="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;