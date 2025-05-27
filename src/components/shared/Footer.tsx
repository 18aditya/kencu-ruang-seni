import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    gallery: [
      { label: 'About Us', href: '#about' },
      { label: 'Current Exhibitions', href: '#exhibitions' },
      { label: 'Artist Directory', href: '#artists' },
      { label: 'Collection Highlights', href: '#collections' }
    ],
    visit: [
      { label: 'Plan Your Visit', href: '#visit' },
      { label: 'Gallery Tours', href: '#tours' },
      { label: 'Group Bookings', href: '#bookings' },
      { label: 'Accessibility', href: '#accessibility' }
    ],
    services: [
      { label: 'Art Consultation', href: '#consultation' },
      { label: 'Private Sales', href: '#sales' },
      { label: 'Art Restoration', href: '#restoration' },
      { label: 'Custom Framing', href: '#framing' }
    ]
  };

  return (
    <footer className="bg-charcoal text-off-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-kencu-red mb-4">
              Bali Gallery
            </h3>
            <p className="font-inter text-off-white/80 mb-6 leading-relaxed">
              Celebrating the artistic heritage of Bali through authentic paintings 
              and contemporary interpretations that bridge tradition with modernity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="font-inter text-off-white/80">
                Jl. Raya Ubud, Gianyar<br />
                Bali 80571, Indonesia
              </p>
              <p className="font-inter text-off-white/80">
                Phone: +62 361 975 123
              </p>
              <p className="font-inter text-off-white/80">
                Email: info@baligallery.art
              </p>
            </div>
          </div>

          {/* Gallery Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-brass-gold mb-4">
              Gallery
            </h4>
            <ul className="space-y-3">
              {footerLinks.gallery.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-inter text-off-white/80 hover:text-brass-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-brass-gold mb-4">
              Visit
            </h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-inter text-off-white/80 hover:text-brass-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-brass-gold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-inter text-off-white/80 hover:text-brass-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-inter text-sm font-medium text-off-white mb-3">
                Stay Updated
              </h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-off-white/10 border border-off-white/20 rounded-l text-sm focus:outline-none focus:border-brass-gold"
                />
                <button className="px-4 py-2 bg-kencu-red hover:bg-kencu-red/90 text-off-white rounded-r text-sm transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-off-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="font-inter text-sm text-off-white/60">
                © {currentYear} Bali Gallery. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="font-inter text-xs text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="font-inter text-xs text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="font-inter text-xs text-off-white/60 hover:text-brass-gold transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
