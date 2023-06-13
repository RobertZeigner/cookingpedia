import RecipeFeed from '@components/RecipeFeed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center  '>
        Entdecke leckere Rezepte
        <br className='max-md:hidden' />
      </h1>

      <RecipeFeed />
    </section>
  );
};
export default Home;
