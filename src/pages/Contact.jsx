import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    {CONTACT_INFO.address.line1}<br />
                    {CONTACT_INFO.address.line2}<br />
                    {CONTACT_INFO.address.line3}<br />
                    {CONTACT_INFO.address.line4}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={48} className="mx-auto mb-4" />
              <p>Interactive Map</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;