
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ubuntu-clay text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Echoes of Ubuntu</h3>
            <p className="text-sm">Preserving the heartbeat of African heritage through digital storytelling—connecting families, communities, and generations.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Languages</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">English</a></li>
              <li><a href="#" className="hover:underline">isiZulu</a></li>
              <li><a href="#" className="hover:underline">isiXhosa</a></li>
              <li><a href="#" className="hover:underline">Afrikaans</a></li>
              <li><a href="#" className="hover:underline">Setswana</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Echoes of Ubuntu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
