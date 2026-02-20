import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
      }}
    />
  );
};

export default SearchBar;
