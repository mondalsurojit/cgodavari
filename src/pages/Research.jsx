import React from 'react';
import SectionCard from '../components/SectionCard';
import { RESEARCH_AREAS } from '../data/constants';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our research encompasses diverse aspects of river basin management, from ecological health to sustainable development strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESEARCH_AREAS.map((area) => (
            <SectionCard
              key={area.id}
              title={area.title}
              description={area.description}
              image={area.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;