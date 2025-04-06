import React from 'react';

const AboutMe = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      
      <p className="text-lg text-gray-600">Hello! I&apos;m <span className='font-semibold'>Albert Astrom</span>, a third-year Computer Engineering student at <a href="https://www.dartmouth.edu" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">Dartmouth College</a> and Computer Science student at <a href="https://www.colby.edu" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">Colby College</a>.</p>

      <br></br>

      <p className="text-lg text-gray-600">
      I&apos;m a developer and organizer for <a href="https://hack-dartmouth.org" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">HackDartmouth</a>, Dartmouth&apos;s annual hackathon, and a software team member writing embedded systems for <a href="https://sites.dartmouth.edu/dfr/" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool">Dartmouth Formula Racing</a>.
      </p>

      <br></br>

      <p className="text-lg text-gray-600">
      Last summer, I interned at <a href="https://www.c10labs.com" target="_blank" rel="noopener noreferrer" className="custom-link aqua_cool" >C10 Labs</a> in Cambridge, MA as a Machine Learning Engineer. 
      </p>
    </div>
  );
}

export default AboutMe;