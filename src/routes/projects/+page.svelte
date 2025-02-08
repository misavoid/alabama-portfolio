<script>
    // Example projects array.
    let projects = [
        {
            id: 1,
            title: "Project One",
            description: "A brief description of project one.",
            moreInfo: "More detailed information about project one."
        },
        {
            id: 2,
            title: "Project Two",
            description: "A brief description of project two.",
            moreInfo: "More detailed information about project two."
        },
        {
            id: 3,
            title: "Project Three",
            description: "A brief description of project three.",
            moreInfo: "More detailed information about project three."
        }
    ];

    // Track which project (if any) is expanded.
    let expandedId = null;

    function toggleExpand(id) {
        expandedId = (expandedId === id) ? null : id;
    }
</script>

<main class="projects-container">
    <h1>My Projects</h1>
    {#each projects as project}
        <div class="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {#if expandedId === project.id}
                <p class="more-info">{project.moreInfo}</p>
            {/if}
            <button class="cta" on:click={() => toggleExpand(project.id)}>
                {expandedId === project.id ? "Hide Details" : "View Details"}
            </button>
        </div>
    {/each}
</main>

<style>
    .projects-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: sans-serif;
    }
    .projects-container h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    .project-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1.5rem;
        transition: box-shadow 0.3s ease;
    }
    .project-card:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .project-card h2 {
        margin: 0 0 0.5rem;
    }
    .project-card p {
        margin: 0.5rem 0;
    }
    .more-info {
        background: #f9f9f9;
        padding: 0.5rem;
        border-radius: 4px;
    }
    .cta {
        background: #0070f3;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 0.5rem;
    }
    .cta:hover {
        background: #005bb5;
    }
</style>
