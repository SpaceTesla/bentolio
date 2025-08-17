'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile/Tablet Menu Button - Visible on screens smaller than lg */}
      <button
        className="hover:bg-secondary rounded-[8px] p-2 text-2xl transition-colors duration-150 lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <div className="bg-primary absolute top-full right-0 left-0 z-50 mt-2 rounded-[20px] p-4 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:bg-secondary block rounded-[8px] px-4 py-2 transition-colors duration-150"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
