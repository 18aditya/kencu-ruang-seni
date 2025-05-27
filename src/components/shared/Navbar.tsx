import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileMenu,ScrollNav } from '@/components/shared';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Exhibitions', href: '/exhibitions' },
  { label: 'Artists', href: '#artists' },
  { label: 'Collections', href: '#collections' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <ScrollNav>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href='/' className="font-playfair text-2xl font-bold text-kencu-red">
              Bali Gallery
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-inter text-charcoal hover:text-kencu-red transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-kencu-red transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-inter text-charcoal hover:text-kencu-red transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-kencu-red transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Visit Gallery
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />
        </div>
      </div>
    </ScrollNav>
  );
}
