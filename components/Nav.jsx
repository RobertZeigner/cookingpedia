'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

import ThemeSwitcher from '@components/ThemeSwitcher';

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const {data: session} = useSession()

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setUpProviders()
  }, []);

  
  return (
    <nav className='mb-16 flex w-full items-center justify-between pt-3'>
      <Link href='/' className='flex-center flex items-center gap-2'>
        <Image
          src='/assets/images/cookbook_dark.svg'
          height={50}
          width={50}
          alt='cookbook'
          className='object-contain dark:invert'
        />
        <p className='logo_text dark:invert'>Cookingpedia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex'>
        {/* <ThemeSwitcher /> */}
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-recipe' className='orange_btn'>
              Neues Rezept
            </Link>

            {/* SignOut/LogOut Button */}
            <button type='button' onClick={signOut} className='orange_btn'>
              Ausloggen
            </button>

            {/* Profile Picture as a Link */}
            <Link href={'/profil'}>
              <Image
                src={session?.user.image}
                height={35}
                width={35}
                alt='profil'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {/* Mapping over all Providers and show them with a Button */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button type='button' className='orange_btn' key={provider.name} onClick={() => signIn(provider.id)}>
                  Einloggen
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              height={35}
              width={35}
              alt='profil'
              className='rounded-full'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link href='/profil' className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                  Mein Profil
                </Link>
                <Link href='/create-recipe' className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                  Neues Rezept
                </Link>
                <button
                  type='button'
                  className='orange_btn mt-5'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >Ausloggen
                </button>
              </div>
            )}

          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Einloggen
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
