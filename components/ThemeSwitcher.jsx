'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

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
        className='switch_btn mr-4'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        <Image
          src={theme === 'light' ? '/assets/images/moon.svg' : '/assets/images/sun.svg'}
          width={23}
          height={23}
          alt=''
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
