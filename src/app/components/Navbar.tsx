import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import MobileMenu from '@/app/components/MobileMenu';

const navLinks = [
  { name: 'Resume', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Deliverables', href: '#' },
  { name: 'Contact me', href: '#' },
];

export default function Navbar() {
  return (
    <nav className="bg-primary relative flex h-16 w-full items-center justify-between rounded-[20px] px-4">
      <Link
        href={'/'}
        className="hover:bg-secondary rounded-[8px] px-2 py-1 transition-colors duration-150"
      >
        <div className="text-2xl font-semibold">
          <span className="font-bold">Shivansh</span>{' '}
          <span className="italic">Karan</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden gap-2 text-base font-medium md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:bg-secondary rounded-[8px] px-4 py-2 transition-colors duration-150"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <ThemeButton />
        <MobileMenu links={navLinks} />
      </div>
    </nav>
  );
}
