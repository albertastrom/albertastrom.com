import React from 'react';


const AboutMe = () => {
  return (
    <div className="mt-8 text-lg">

      <p className="text-gray-600">Hello! I&apos;m <span className='font-semibold'>Albert Astrom</span>, a third year Computer Engineering student at <a href="https://www.dartmouth.edu" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">Dartmouth College</a> and Computer Science student at <a href="https://www.colby.edu" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">Colby College</a>.</p>

      <br></br>


      <p className="text-gray-600">
        This past summer I was interning at <a href="https://www.c10labs.com" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool" >C10 Labs</a> in Cambridge, MA as a Machine Learning Engineer. 
      </p>
    </div>
  );
}

export default AboutMe;