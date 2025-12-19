import React from 'react';
import { MapPin, Mail, User } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants';

const Contact = () => {
  const { address, organizationEmail, contactPerson } = CONTACT_INFO;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 md:gap-x-0 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Get In Touch
            </h3>

            {/* Contact Person (No Card Styling) */}
            <div className="flex items-start space-x-4 max-w-md">
              <User className="text-blue-600 mt-1" size={24} />
              <div>
                <p className="text-gray-800 font-medium">
                  {contactPerson.name}
                </p>
                <p className="text-gray-600">
                  {contactPerson.role}
                </p>
                <a
                  href={`mailto:${contactPerson.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactPerson.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Address
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {address.line1}
                  <br />
                  {address.line2}
                </p>
              </div>
            </div>

            {/* Organisation Email (Blue like Contact Person Email) */}
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${organizationEmail}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {organizationEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Civil Engineering Block B - IIT Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.5831662140847!2d78.12288577490225!3d17.5942317833808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf5b68a2b70c9%3A0x10da85b7336cfcd1!2sDepartment%20of%20Civil%20Engineering%2C%20Block%20B%2C%20IIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1730478201239!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
