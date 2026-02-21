import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="text-center p-6 bg-gray-100">
        <h1 className="text-3xl">GitHub User Search</h1>
        <p className="text-gray-600 mt-2">
          Search for GitHub users and view their profiles, using usernames, locations and repositories as filters.
        </p>
      </header>
      <main className="p-4">
        <Search />
      </main>
    </div>
  );
}

export default App;