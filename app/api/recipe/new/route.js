// Route for creating a new Recipe
import { connectToDB } from '@utils/database';
import Recipe from '@models/recipe';

export const POST = async (req) => {
  const { userId, recipe, tag } = await req.json();
  try {
    await connectToDB();
    const newRecipe = new Recipe({ creator: userId, recipe, tag });
    await newRecipe.save();
    return new Response(JSON.stringify(newRecipe), { status: 201 });
  } catch (error) {
    return new Response('Failed to save new recipes');
  }
};
