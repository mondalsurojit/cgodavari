import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About cGodavari</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Centre for Godavari River Basin Management & Studies
          </h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Centre for Godavari River Basin Management & Studies (cGodavari) at IIT Hyderabad represents a pioneering initiative in integrated river basin research and management. Established as part of the national CAMP (Consortium for Aquatic Modeling and Policy) network, our center brings together interdisciplinary expertise to address the complex challenges facing the Godavari River Basin.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The Godavari River, India's second-longest river system, supports over 75 million people across seven states. Our research focuses on understanding the intricate relationships between water resources, environmental health, socio-economic development, and climate variability within this vast basin.
          </p>

          <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">Our Mission</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To advance scientific knowledge and develop sustainable management strategies for the Godavari River Basin through cutting-edge research, stakeholder engagement, and capacity building initiatives.
          </p>

          <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">Research Priorities</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Comprehensive water quality monitoring and assessment</li>
            <li>Ecological health and biodiversity conservation</li>
            <li>Climate change impact analysis and adaptation strategies</li>
            <li>Integrated water resource management</li>
            <li>Flood risk assessment and management</li>
            <li>Stakeholder engagement and policy development</li>
          </ul>

          <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">Collaborative Network</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            cGodavari operates in close collaboration with CSIR-NEERI Nagpur, state water resource departments, academic institutions, and local communities. This collaborative approach ensures our research remains grounded in real-world challenges while contributing to evidence-based policy making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;