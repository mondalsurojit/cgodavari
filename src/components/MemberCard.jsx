import React from 'react';

const MemberCard = ({ name, designation, institution, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-blue-600 font-semibold mb-1">{designation}</p>
        <p className="text-sm text-gray-600">{institution}</p>
      </div>
    </div>
  );
};

export default MemberCard;