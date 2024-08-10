document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "Devlog #1: Starting the Journey",
            date: "August 10, 2024",
            content: "Today marks the beginning of Cube Melon Games! I'm excited to share the process of creating my first game. Stay tuned for updates on the game mechanics and early prototypes."
        },
        {
            title: "Devlog #2: Prototyping the Main Mechanic",
            date: "August 15, 2024",
            content: "Spent the week working on the main mechanic of the game, a fun rope system for platforming! It’s coming along nicely, though there are still a few bugs to iron out."
        },
        {
            title: "Devlog #3: Visuals and Aesthetics",
            date: "August 22, 2024",
            content: "This week was all about the game's visuals. I've been experimenting with different art styles and have finally settled on a vibrant, cartoonish look that fits the game’s theme perfectly."
        }
        // Add more posts as needed
    ];

    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        postCard.innerHTML = `
            <h4>${post.title}</h4>
            <p><strong>Date:</strong> ${post.date}</p>
            <p>${post.content}</p>
        `;

        postContainer.appendChild(postCard);
    });
});
