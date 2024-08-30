document.addEventListener('DOMContentLoaded', () => {
    // This function shows the detailed article view
    function showDetailedPost(postUrl) {
        const articleList = document.getElementById('article-list');
        const articleDetail = document.getElementById('article-detail');
        const articleContent = document.getElementById('article-content');

        // Load the content from the external file into the article content div
        fetch(postUrl)
            .then(response => response.text())
            .then(data => {
                articleContent.innerHTML = data;
                articleList.style.display = 'none';
                articleDetail.style.display = 'block';
            })
            .catch(error => console.error('Error loading article:', error));
    }

    // This function shows the article list
    function showArticleList() {
        const articleList = document.getElementById('article-list');
        const articleDetail = document.getElementById('article-detail');

        articleDetail.style.display = 'none';
        articleList.style.display = 'block';
    }

    // Add event listeners for showing and hiding articles
    window.showDetailedPost = showDetailedPost;
    window.showArticleList = showArticleList;
});

window.showDetailedPost = function (postUrl) {
    const articleList = document.getElementById('article-list');
    const articleDetail = document.getElementById('article-detail');
    const articleContent = document.getElementById('article-content');

    // Load the content from the external file into the article content div
    fetch(postUrl)
        .then(response => response.text())
        .then(data => {
            articleContent.innerHTML = data;
            articleList.style.display = 'none';
            articleDetail.style.display = 'block';
        })
        .catch(error => console.error('Error loading article:', error));
};

window.showArticleList = function () {
    const articleList = document.getElementById('article-list');
    const articleDetail = document.getElementById('article-detail');

    articleDetail.style.display = 'none';
    articleList.style.display = 'block';
};
