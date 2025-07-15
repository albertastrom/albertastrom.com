import React from 'react';
import Position from './position';

const Experience = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="relative">
        {/* Timeline line positioned to center with nodes */}
        <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gray-300"></div>
        <Position title="Machine Learning Intern" company="evroc" timeframe="Summer 2025" description="Building agentic AI to automate infrastructure-as-code deployment for flash provisioning on evroc's cloud platform." link="https://www.evroc.com" linkTitle="evroc.com"/>
        <Position title="Machine Learning Intern" company="C10 Labs" timeframe="Summer 2024" description="Developing startup application review system using LangChain, React, and serverless functions for the C10 Labs accelerator program." link="https://www.c10labs.com" linkTitle="c10labs.com"/>
        <Position title="CS Teaching Assistant" timeframe="Feb. 2023 - May 2024" company="Colby CS" description="CS231: Data Structures and Algorithms, CS333: Programming Languages" link="https://cs.colby.edu/courses/S24/231/" linkTitle="cs.colby.edu" isLast={true}/>
      </div>
    </div>
  );
}

export default Experience;