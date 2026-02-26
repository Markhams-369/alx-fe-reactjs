import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data.items || []); // Ensure we set an empty array if data.items is undefined
      if ((data.items || []).length === 0)
        setError("No users found matching the criteria");
    // eslint-disable-next-line no-unused-vars
    } catch (_error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-6 md:flex-row"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location" // optional filter for location
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories" // optional filter for minimum repositories
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded shadow">
              <img
                src={user.avatar_url}
                alt={user.login}
                width="80"
                className="mb-4 rounded-full"
              />
              <h2 className="mt-2 font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
