export function getGithubRepos() {
    try {
        const response = fetch(`https://api.github.com/users/MatiuxDev`).then(response => response.json());
        
        return response;
    } catch (err) {
        console.log(err);
    }
}