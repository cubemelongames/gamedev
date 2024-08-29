document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const contentContainer = document.getElementById('content');

            posts.forEach(post => {
                // Create article element
                const article = document.createElement('article');
                article.className = 'article-item';

                // Create text div
                const textDiv = document.createElement('div');
                textDiv.innerHTML = `<p>${post.text}</p>`;

                // Create media element (image or iframe)
                let mediaElement;
                if (post.media.type === 'image') {
                    mediaElement = document.createElement('img');
                    mediaElement.src = post.media.src;
                    mediaElement.alt = post.media.alt;
                } else if (post.media.type === 'iframe') {
                    mediaElement = document.createElement('iframe');
                    mediaElement.src = post.media.src;
                    mediaElement.setAttribute('frameborder', '0');
                    mediaElement.setAttribute('allowfullscreen', 'true');
                }

                // Add event listener for opening the detailed view
                article.addEventListener('click', () => {
                    // Create a modal or detailed view here to show post.html content
                    showDetailedPost(post.html);
                });

                // Append elements to article
                article.appendChild(mediaElement);
                article.appendChild(textDiv);
                contentContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error loading posts:', error);
        });
});

function showDetailedPost(htmlContent) {
    // Implement a modal or detailed view to display the htmlContent
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = htmlContent;

    // Add a close button or click event to close the modal
    modal.addEventListener('click', () => {
        modal.remove();
    });

    document.body.appendChild(modal);
}
