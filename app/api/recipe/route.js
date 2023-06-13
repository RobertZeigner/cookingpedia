// Route for fetching all Recipes
import { connectToDB } from '@utils/database';
import Recipe from '@models/recipe';

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const recipes = await Recipe.find({}).populate('creator');
    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all recipe');
  }
};
