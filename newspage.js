function loadArticles() {
    let newsArticlesDiv = document.getElementById('newsArticles');
    let articleContent = "";
    const fetchURL =  './code-test.json'; 
    async function fetchArticlesJson() {
        const response = await fetch(
                fetchURL,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                }
            );
        const articles = await response.json();
        return articles;
    }

    fetchArticlesJson().then(articles => {
        const ArticlesObj = articles.articles; // fetched articles
        for(let i=0; i<ArticlesObj.length; i++) {
            articleContent += `<article class="listArticle">
                                    <h4>${ArticlesObj[i].primarySectionRouteName}</h4>
                                    <div class="flex-container">
                                        <div class="news-headline">
                                            <h3>${ArticlesObj[i].headline}</h3>
                                            <p>${ArticlesObj[i].standfirst}</p>
                                        </div>
                                        <div class="news-img">
                                            <img src="${ArticlesObj[i].thumbnail.src}"/>
                                        </div>
                                    </div>
                                <hr>
                                </article>`;
        }   
        
        newsArticlesDiv.innerHTML += articleContent;
    });


    
}

loadArticles();

    
