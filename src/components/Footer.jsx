import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/constants';

const ICONS = {
  Instagram: Instagram,
  Linkedin: Linkedin,
  Youtube: Youtube,
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              {/* Updated Logo — transparent, no border, larger */}
              <img
                src="/cgodavari-logo2.png"
                alt="cGodavari Logo"
                className="w-16 h-16 object-contain"
              />
              <div className="ml-3">
                <h3 className="text-lg font-bold">cGodavari</h3>
                <p className="text-sm text-gray-400">IIT Hyderabad</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Advancing sustainable solutions for Godavari River Basin management through cutting-edge research and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = ICONS[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 cGodavari - IIT Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
