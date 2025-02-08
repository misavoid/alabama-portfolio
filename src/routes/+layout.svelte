<script>
    // You can include global scripts or logic here if needed.
</script>

<nav class="navbar">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
</nav>

<slot />

<style>
    .navbar {
        display: flex;
        justify-content: center;
        gap: 1rem;
        background: #f7f7f7;
        padding: 1rem;
        font-family: sans-serif;
    }
    .navbar a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }
</style>
