import '@styles/globals.css';
import Nav from '@components/Nav';

import ThemeProviders from '@components/ThemeProvider';
import Providers from '@components/Providers';

export const MetaData = {
  title: 'Cookingpedia',
  description: 'Leckere & Gesunde Rezepte',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='de'>
      <body className='dark:bg-slate-800'>
        <Providers>
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
