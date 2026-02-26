import "./App.css";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <header className="p-6 text-center bg-gray-100">
        <h1 className="text-3xl">GitHub User Search</h1>
        <p className="mt-2 text-gray-600">
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