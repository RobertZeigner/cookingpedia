import '@styles/globals.css';
import Nav from '@components/Nav';

import ThemeProviders from '@components/ThemeProvider';
import Providers from '@components/Providers';
import Image from 'next/image';

export const MetaData = {
  title: 'Cookingpedia',
  description: 'Leckere & Gesunde Rezepte',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='de'>
      <body>
        <Providers>
          {/* <div className='main' /> */}
          {/* <Image
            src={'/assets/images/layered-waves.svg'}
            alt='waves'
            fill
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          /> */}
          <main className='app'>
            <ThemeProviders>
              <Nav />
              {children}
            </ThemeProviders>
          </main>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
