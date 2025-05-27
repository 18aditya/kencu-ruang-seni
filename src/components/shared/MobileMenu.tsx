'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-charcoal hover:text-kencu-red transition-colors"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-off-white shadow-lg border-t">
          <div className="px-4 py-6 space-y-4">
            {items.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-inter text-charcoal hover:text-kencu-red transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-inter text-charcoal hover:text-kencu-red transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <Button className="w-full bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter py-2 rounded-lg mt-4">
              Visit Gallery
            </Button>
          </div>
        </div>
      )}
    </>
  );
} 