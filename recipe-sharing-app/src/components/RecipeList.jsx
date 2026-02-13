import { Link } from 'react-router-dom';
import { useRecipeStore } from './components/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes
  );

  if (filteredRecipes.length === 0) {
    return <p>No matching recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
