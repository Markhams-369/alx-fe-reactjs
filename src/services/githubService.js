// src/services/githubService.js
import axios from "axios";

export async function fetchUserData(
    username = "",
    location = "",
    minRepos = "",
) {
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`,
        {
            headers: {
                Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
            },
        },
    );
    

    return response.data;
}
