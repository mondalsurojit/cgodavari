import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About cGodavari</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Preamble</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The river Godavari is of unique importance to India for geographical, historical, socio-cultural, and economic reasons.
            She has been facing serious threats due to discharge of increasing quantities of sewage, trade effluents, and other pollutants
            largely on account of rapid urbanization, industrialization, and agricultural growth.
            The challenge is compounded by competing demands of river water and other river resources needed for healthy functioning
            of rivers on the one hand, and for irrigation, industrial usage, power generation, and domestic needs on the other.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            There is, therefore, a need to ensure effective abatement of pollution and conservation of the river Godavari by adopting
            a river basin approach to promote inter-sectoral coordination for comprehensive planning and management.
            It is equally important to maintain adequate flows of water, sediments and nutrients, stream power, and river space in river
            Godavari and her tributaries with the dual objectives of preserving natural ecosystems and achieving sustainable development.
            The issues of concern and challenges are similar to those faced by the National River Ganga for which the collective efforts
            of the Central and State Governments for effective abatement of pollution and conservation of the river Ganga were necessary,
            and a cogent management plan had to be evolved.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Objective</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The objective of the integrated river basin management of River Godavari is the restoration and maintenance of wholesomeness
            of the river system and improvement of its ecological health with due regard to resolution of conflict of interest in
            anthropogenic land and water uses in the entire river basin. This entails adequate provision for natural resources
            (e.g. soil, water, energy, flora and fauna) conservation and accommodating the requirements of increasing urbanization,
            infrastructure development, industrialization and agriculture while ensuring that the following fundamental aspects of the
            river system are protected:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Continuous river flow (Aviral Dhara)</li>
            <li>Unpolluted river flow (Nirmal Dhara)</li>
            <li>Longitudinal and lateral connectivity</li>
            <li>Adequate space for all essential river functions</li>
            <li>Functioning of the river as an ecological entity</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Mandate</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Mandate of the Centre for Godavari River Basin Management Studies is to collate and gather knowledge for preparing and
            dynamically evolving the Godavari River Basin Management Plan that should provide Action Plans with specific projects to
            be taken up at different levels of priority, policy interventions, and management actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
