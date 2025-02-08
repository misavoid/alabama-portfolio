<script>
    export let data;
    let projects = data.projects;
    let expandedId = null;

    function toggleExpand(id) {
        expandedId = expandedId === id ? null : id;
    }
</script>

<main class="projects-container">
    <h1>My Projects</h1>

    {#if projects.length === 0}
        <p>No projects found.</p>
    {:else}
        <div class="projects-grid">
            {#each projects as project}
                <div class="project-card">
                    <div class="project-content">
                        <h2>{project.name}</h2>
                        <p>{project.description || "No description available."}</p>
                        {#if expandedId === project.id}
                            <div class="more-info">
                                <p>🌟 Stars: {project.stargazers_count} | 🍴 Forks: {project.forks_count}</p>
                                <p>
                                    <a href={project.html_url} target="_blank">View on GitHub</a>
                                </p>
                            </div>
                        {/if}
                    </div>
                    <button class="cta" on:click={() => toggleExpand(project.id)}>
                        {expandedId === project.id ? "Hide Details" : "View Details"}
                    </button>
                </div>
            {/each}
        </div>
    {/if}
</main>

<style>
    .projects-container {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: 'Segoe UI', sans-serif;
        color: #333;
    }
    .projects-container h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    /* Use Flexbox for each card to align the button at the bottom */
    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 1.5rem;
        background: #fff;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .project-content {
        flex-grow: 1;
    }
    .project-card h2 {
        margin: 0 0 1rem;
        font-size: 1.5rem;
        color: #222;
    }
    .project-card p {
        margin: 0.5rem 0;
        line-height: 1.5;
    }
    .more-info {
        margin-top: 1rem;
        background: #f8f8f8;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 0.9rem;
    }
    .more-info a {
        color: #0070f3;
        text-decoration: none;
    }
    .more-info a:hover {
        text-decoration: underline;
    }
    /* Button styling with a fixed min-height for consistency */
    .cta {
        display: block;
        width: 100%;
        min-height: 50px; /* Ensures all buttons are at least 50px tall */
        background: #0070f3;
        color: #fff;
        border: none;
        padding: 0.75rem;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 1rem;
        transition: background 0.2s ease;
    }
    .cta:hover {
        background: #005bb5;
    }
</style>
