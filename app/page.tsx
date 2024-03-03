import { FaGithub, FaLinkedin, FaShuttleSpace } from 'react-icons/fa6'; 


const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-sky-400">

      <div className="bg-slate-50 rounded-2xl p-12 mx-4 w-full h-[calc(100%-2rem)]">
    
        <div className="flex justify-center w-full">
        
          <div className="w-1/3 min-w-[20rem] max-w-[40rem]">

            <div className="flex items-baseline justify-between">
              <h2 className='text-3xl font-semibold mb-4'>Albert Astrom</h2>
              <div className='flex items-center gap-x-2.5 sm:gap-x-2 translate-y-1'>
                <a href="https://github.com/albertastrom" className="text-gray-700 mx-2">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/albertastrom/" className="text-gray-700 mx-2">
                  <FaLinkedin size={24} />
                </a>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">About me</h2>
            <p className="text-gray-600">I'm a sophomore Computer Science student at Colby College</p>
          </div>
            <div className="mt-8">

              <h2 className="text-xl font-semibold mb-4">Projects</h2>
            
              <div className="mb-4">
                <h3 className="font-semibold">Project 1</h3>
                <p className="text-gray-600">Look what I did...</p>
              </div>
            </div>
            <div >
    
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
