<script lang="ts">
    export let data;
    let projects = data.projects;
    let flip = []; // track flip state for each project

    function toggleExpand(id: number, i: number) {
        flip[i] = !flip[i];
    }
</script>

<main class="projects-container">
    <h1>My Projects</h1>
    {#if projects.length === 0}
        <p>No projects found.</p>
    {:else}
        <div class="projects-grid">
            {#each projects as project, i}
                <div class="card-container">
                    <div class="flip-container">
                        <div class="flip-inner {flip[i] ? 'flipped' : ''}">
                            <!-- Front Face -->
                            <div class="card-face card-front">
                                <div class="project-content">
                                    <h2>{project.name}</h2>
                                    <p>{project.description || "No description available."}</p>
                                </div>
                                <button class="cta" on:click={() => toggleExpand(project.id, i)}>
                                    View Details
                                </button>
                            </div>
                            <!-- Back Face -->
                            <div class="card-face card-back">
                                <div class="more-info">
                                    <p>🌟 Stars: {project.stargazers_let}  | 🍴 Forks: {project.forks_let}</p>
                                    <p>
                                        <a href={project.html_url} target="_blank">View on GitHub</a>
                                    </p>
                                </div>
                                <button class="cta" on:click={() => toggleExpand(project.id, i)}>
                                    Hide Details
                                </button>
                            </div>
                        </div>
                    </div>
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

    /* Ensure the card container has a minimum height */
    .card-container {
        perspective: 1000px;
        min-height: 350px; /* Adjust as needed */
        position: relative;
    }

    /* Apply the border to the flip container and ensure it fills the card */
    .flip-container {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
    }

    /* The inner container that is animated */
    .flip-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .flip-inner.flipped {
        transform: rotateY(180deg);
    }

    /* Card faces fill the container */
    .card-face {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        backface-visibility: hidden;
    }
    .card-front {
        z-index: 2;
    }
    .card-back {
        transform: rotateY(180deg);
    }

    .project-content h2 {
        margin: 0 0 1rem;
        font-size: 1.5rem;
        color: #222;
    }
    .project-content p {
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

    .cta {
        background: #0070f3;
        color: #fff;
        border: none;
        padding: 0.75rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.2s ease;
        margin-top: 1rem;
    }
    .cta:hover {
        background: #005bb5;
    }
</style>