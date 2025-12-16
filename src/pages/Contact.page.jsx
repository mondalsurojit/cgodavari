import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 md:gap-x-0 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  {CONTACT_INFO.address.line1}<br />
                  {CONTACT_INFO.address.line2}<br />
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Civil Engineering Block B - IIT Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.5831662140847!2d78.12288577490225!3d17.5942317833808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf5b68a2b70c9%3A0x10da85b7336cfcd1!2sDepartment%20of%20Civil%20Engineering%2C%20Block%20B%2C%20IIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1730478201239!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
