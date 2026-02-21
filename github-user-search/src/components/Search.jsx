/* eslint-disable no-unused-vars */
import { useState } from "react";
import { fetchUserData } from "src/services/githubService";

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
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location" // optional filter for location
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories" // optional filter for minimum repositories
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
              <img
                src={user.avatar_url}
                alt={user.login}
                width="80"
                className="rounded-full mb-4"
              />
              <h2 className="font-bold mt-2">{user.login}</h2>
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
