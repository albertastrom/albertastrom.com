import React from 'react';
import Position from './position';

const Experience = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <Position title="Machine Learning Intern" company="C10 Labs" timeframe="Summer 2024" description="" link="https://www.c10labs.com" linkTitle="c10labs.com"/>

        <Position title="CS Teaching Assistant" timeframe="Feb. 2023 - May 2024" company="Colby CS Department" description="CS231: Data Structures and Algorithms" link="https://cs.colby.edu/courses/S24/231/" linkTitle="cs.colby.edu"/>

        

        

    </div>
    
  );
}

export default Experience;