import React from 'react';
import MemberCard from '../components/MemberCard';
import { TEAM } from '../data/constants';

const Section = ({ title, members }) => {
  const isSingleMember = members.length === 1;

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
        {title}
      </h3>

      <div
        className={
          isSingleMember
            ? 'flex justify-center'
            : 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
        }
      >
        {members.map(member => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

const Members = () => {
  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated researchers and experts driving innovation.
          </p>
        </div>

        <Section title="Mentor" members={TEAM.mentor} />
        <Section title="Faculty" members={TEAM.faculty} />
        <Section title="Project Staff" members={TEAM.projectStaff} />

      </div>
    </section>
  );
};

export default Members;
