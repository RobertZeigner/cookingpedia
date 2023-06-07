import '@styles/globals.css';

export const MetaData = {
  title: 'Cookingpedia',
  description: 'Leckere & Gesunde Rezepte',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='de'>
      <body>
        <div className='main'></div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
