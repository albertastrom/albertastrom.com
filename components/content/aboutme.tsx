import React from 'react';

const AboutMe = () => {
  return (
    <div className="mt-8">

      <p className="text-gray-600">Hello! I&apos;m <span className='font-semibold'>Albert Astrom</span>, a third year Computer Engineering student at <a href="https://www.dartmouth.edu" target="_blank" rel="noopener noreferrer" className="custom-link c10">Dartmouth College</a> and Computer Science student at <a href="https://www.colby.edu" target="_blank" rel="noopener noreferrer" className="custom-link c10">Colby College</a>.</p>

      <br></br>


      <p className="text-gray-600">
        This summer I am interning at <a href="https://www.c10labs.com" target="_blank" rel="noopener noreferrer" className="custom-link c10" >C10 Labs</a> in Cambridge, MA as a Machine Learning Engineer. 
      </p>
    </div>
  );
}

export default AboutMe;