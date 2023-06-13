import Link from 'next/link';

const Form = ({ type, post, setRecipe, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex justify-start items-start flex-col mb-4'>
      <h1 className='text-left text-4xl sm:text-5xl mt-5 sm:leading-4 font-extrabold'>
        <span>{type} ein neues Rezept</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-4xl flex flex-col gap-7 p-5 border rounded-xl border-gray-700 bg-white/30 dark:border-white dark:bg-transparent'
      >
        <label>
          <span className='font-semibold text-base text-gray-800 dark:text-white'>Dein leckeres Rezept</span>
          <textarea
            className=' w-full flex rounded-lg min-h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0 border border-slate-800 dark:bg-white'
            value={post.recipe}
            onChange={(e) => setRecipe({ ...post, recipe: e.target.value })}
            required
            placeholder='Schreib dein Rezept & Zutaten hier rein'
          />
        </label>

        <label>
          <span className='font-semibold text-base text-gray-800 dark:text-white'>
            Hashtag
            <span className='font-normal dark:text-white'> z.B #vegan, #highprotein, #sweet...</span>
          </span>
          <input
            type='text'
            className=' w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 border border-slate-800 dark:bg-white'
            value={post.tag}
            onChange={(e) => setRecipe({ ...post, tag: e.target.value })}
            required
            placeholder='#schmackofatz'
          />
        </label>
        <div className='flex items-center justify-end mx-3 mb-5 gap-3'>
          <Link href='/' className='text-black text-sm  rounded-full bg-orange-600 px-5 py-1.5'>
            Abbrechen
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm rounded-full text-black bg-orange-600'
          >
            {submitting ? `${type}n...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
