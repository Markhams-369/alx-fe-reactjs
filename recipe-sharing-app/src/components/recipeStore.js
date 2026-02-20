import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  favorites: [],
  recommendations: [],

  setRecipes: (newRecipes) =>
    set({
      recipes: newRecipes,
      filteredRecipes: newRecipes,
    }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      return {
        recipes: updatedRecipes,
        favorites: state.favorites.filter((favId) => favId !== id),
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
      };
    }),

  /* ---------------- Search ---------------- */

  setSearchTerm: (term) => {
    const { recipes } = get();
    set({
      searchTerm: term,
      filteredRecipes: filterBySearch(recipes, term),
    });
  },

  /* ---------------- Favorites ---------------- */

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // prevent duplicates
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations 

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Get titles of favorite recipes
    const favoriteRecipes = recipes.filter((r) =>
      favorites.includes(r.id)
    );

    const keywords = favoriteRecipes
      .flatMap((r) => r.title.toLowerCase().split(' '));

    // Recommend non-favorite recipes with similar keywords
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        keywords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        )
    );

    set({ recommendations: recommended });
  },
}));

/* -------- Helper -------- */
const filterBySearch = (recipes, term) => {
  if (!term) return recipes;

  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};
