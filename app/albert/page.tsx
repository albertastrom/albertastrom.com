
import  Header from '../../components/header/header'

// testing the routing 
const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-sky-400">
      <div className="bg-slate-50 rounded-2xl p-12 mx-4 w-full h-[calc(100%-2rem)] max-w-full">
        <div className="flex justify-center w-full">
          <div className="w-1/3 min-w-[20rem] max-w-[40rem]">

            {/* <PittsburghTripBanner year={'2015'}/> */}
            <Header/>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About me</h2>
              <p className="text-gray-600">THIS IS A TRICK</p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <div className="mb-4">
                <h3 className="font-semibold">Project 1</h3>
                <p className="text-gray-600">Look what I did...</p>
              </div>
            </div>
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