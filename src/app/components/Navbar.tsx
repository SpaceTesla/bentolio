import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import MobileMenu from '@/app/components/MobileMenu';

const navLinks = [
  { name: 'Resume', href: '/resume.pdf' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Deliverables', href: '/deliverables' },
  { name: 'Contact me', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav
      className="bg-primary relative z-50 flex h-16 w-full items-center justify-between rounded-[20px] px-4"
      aria-label="Main Navigation"
    >
      <Link
        href={'/'}
        className="hover:bg-secondary rounded-[8px] px-2 py-1 transition-colors duration-150"
        aria-label="Shivansh Karan - Home"
      >
        <div className="text-xl font-semibold">
          <span className="font-bold">Shivansh</span>{' '}
          <span className="italic">Karan</span>
        </div>
      </Link>

      {/* Desktop Menu - Hidden on mobile and tablet */}
      <ul
        className="hidden gap-2 text-base font-medium lg:flex"
        role="menubar"
        aria-label="Main Navigation Menu"
      >
        {navLinks.map((link) => (
          <li key={link.name} role="none">
            <Link
              href={link.href}
              className="hover:bg-secondary rounded-[8px] px-4 py-2 transition-colors duration-150"
              role="menuitem"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4" aria-label="Navigation Controls">
        <ThemeButton />
        {/* Mobile and Tablet Menu - Visible on screens smaller than lg */}
        <MobileMenu links={navLinks} />
      </div>
    </nav>
  );
}
