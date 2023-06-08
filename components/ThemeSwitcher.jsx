'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className='orange_btn mr-4'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
