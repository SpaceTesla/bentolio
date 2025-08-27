'use client';

import { useTheme } from 'next-themes';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:bg-secondary ml-4 rounded-[8px] p-2 transition-colors duration-150"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <LuSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <LuMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
