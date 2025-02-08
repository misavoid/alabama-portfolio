<script>
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log("Form submitted:", data);
        // Optionally display a success message or send the data to an API.
        event.target.reset();
    }
</script>


<main class="contact-container">
    <h1>Contact Me</h1>
    <p>If you'd like to get in touch, please fill out the form below.</p>
    <form class="contact-form" on:submit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" class="cta">Send Message</button>
    </form>
</main>

<style>
    .contact-container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: sans-serif;
        line-height: 1.6;
    }
    .contact-container h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .contact-form input,
    .contact-form textarea {
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .cta {
        background: #0070f3;
        color: #fff;
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    .cta:hover {
        background: #005bb5;
    }
</style>
