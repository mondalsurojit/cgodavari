import React from 'react';

const MemberCard = ({ name, designation, institution, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-1">{designation}</p>
        <p className="text-gray-600 text-sm">{institution}</p>
      </div>
    </div>
  );
};

export default MemberCard;