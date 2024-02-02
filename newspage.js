function loadArticles() {
    let newsArticlesDiv = document.getElementById('newsArticles');
    let articleContent = "";
    let fetchArticles = fetch('http://localhost:3000/code-test.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
   .then(response => response.json())
   .then(response => {
    console.log(JSON.stringify(response))
        for(let i=0; i<response.articles.length; i++){
            articleContent += `<article class="listArticle">
                           <h4>${response.articles[i].primarySectionRouteName}</h4>
                               <div class="flex-container">
                               <div class="news-headline">
                               <h3>${response.articles[i].headline}</h3>
                               <p>${response.articles[i].standfirst}</p>
                               </div>
                               <div class="news-img">
                               <img src="${response.articles[i].thumbnail.src}"/>
                               </div>
                               </div>
                               <hr>
                               </article>`;
        }    
        newsArticlesDiv.innerHTML += articleContent;
    }
    
    );



    
}

loadArticles();

    
