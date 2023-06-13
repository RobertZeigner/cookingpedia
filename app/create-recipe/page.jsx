'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreateRecipe = () => {
  const [submitting, setSubmitting] = useState(false);
  const [recipe, setRecipe] = useState({ recipe: '', tag: '' });

  const { data: session } = useSession();
  const router = useRouter();

  const createRecipe = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/recipe/new', {
        method: 'POST',
        body: JSON.stringify({
          recipe: recipe.recipe,
          userId: session?.user.id,
          tag: recipe.tag,
        }),
      });
      if (res.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form type='Erstelle' post={recipe} setRecipe={setRecipe} submitting={submitting} handleSubmit={createRecipe} />
  );
};
export default CreateRecipe;
