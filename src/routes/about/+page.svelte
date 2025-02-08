<script>
    export let name = "Patricia"; // Change to your name
    export let title = "Data Scientist & Developer";

    const coderSnippet = `const coder = {
    name: "${name}",
    skills: [
         "Svelte",
         "JavaScript",
         "Python",
         "Docker",
         "AWS",
         "C#",
         "Machine Learning"
    ],
    hardWorker: true,
    problemSolver: true,
    hireable: function() {
        return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
};`;
</script>

<main class="container">
    <header>
        <h1>👾</h1>
    </header>

    <section class="intro">
        <h2>
            Hellohellohello
            <span class="wave">👋🏻</span> <br>
            I am <span class="highlight">{name}</span> - a <span class="highlight">{title}.</span>
        </h2>
    </section>

    <section class="code-box">
        <div class="code-header">
            <div class="dots">
                <span class="red"></span>
                <span class="yellow"></span>
                <span class="green"></span>
            </div>
        </div>
        <pre><code>{coderSnippet}</code></pre>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

    :root {
        --primary-color: #0fa3b1;
        --secondary-color: #f0f;
        --bg-dark: #0a0a0a;
        --text-color: #e0e0e0;
    }

    body {
        background: var(--bg-dark);
        color: var(--text-color);
        font-family: 'Space Grotesk', sans-serif;
    }

    .container {
        max-width: 900px;
        margin: auto;
        padding: 2rem;
        text-align: center;
    }

    h1 {
        font-size: 2rem;
        color: var(--primary-color);
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
        text-shadow: 0 0 10px var(--primary-color);
    }

    h2 {
        font-family: 'Orbitron', sans-serif;
    }

    .wave {
        display: inline-block;
        font-size: 3rem;
        margin-left: 0.3rem;
        animation: wave-animation 1.5s infinite ease-in-out;
        transform-origin: 70% 70%;
    }

    @keyframes wave-animation {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
    }


    .highlight {
        color: var(--secondary-color);
        text-shadow: 0 0 10px var(--secondary-color);
    }

    .code-box {
        background: #151515;
        padding: 1rem;
        margin-top: 2rem;
        border-radius: 10px;
        box-shadow: 0 0 10px var(--primary-color);
        text-align: left;
    }

    .code-header {
        display: flex;
        padding: 0.5rem;
        background: #1a1a1a;
        border-radius: 8px 8px 0 0;
    }

    .dots {
        display: flex;
        gap: 5px;
    }

    .dots span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
    }

    .red { background: red; }
    .yellow { background: yellow; }
    .green { background: limegreen; }

    pre {
        font-size: 1rem;
        color: var(--text-color);
        padding: 1rem;
        white-space: pre-wrap;
    }
</style>
