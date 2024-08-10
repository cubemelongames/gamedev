document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById('post-container');

            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';

                postCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title} Image" class="post-image">
                    <h4>${post.title}</h4>
                    <p><strong>Date:</strong> ${post.date}</p>
                    <p>${post.content}</p>
                `;

                postContainer.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error('Error loading posts:', error);
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
        });
});
