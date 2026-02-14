import { useState } from 'react'
import { useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

  

function App() {
  const [count, setCount] = useState(0)
  const setRecipes = useRecipeStore((state) => state.setRecipes);

    useEffect(() => {
      const initialRecipes = [
        { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta dish" },
        { id: 2, title: "Chicken Curry", description: "Spicy and flavorful curry" },
        { id: 3, title: "Greek Salad", description: "Fresh and healthy salad" },
      ];

    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
        <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App;
