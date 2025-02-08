// +page.js
export async function load({ fetch }) {
    const username = 'misavoid'; // Replace with your GitHub username
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    let projects = await response.json();

    // Whitelist: only include projects with names in this list
    const selectedProjects = ['alabama-portfolio','ShippingLabelConverter','Momentta', 'pomodoro']; // Replace with your desired repos
    projects = projects.filter(project => selectedProjects.includes(project.name));

    return { projects };
}
