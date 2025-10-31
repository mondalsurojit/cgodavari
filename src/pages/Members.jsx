import React from 'react';
import MemberCard from '../components/MemberCard';
import { TEAM_MEMBERS } from '../data/constants';

const Members = () => {
  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated researchers and experts driving innovation in river basin management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              institution={member.institution}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;