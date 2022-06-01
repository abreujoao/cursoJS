$(function(){ //Iniciando escopo jquery


    function consultaNoticias(){
        $.ajax({
            url: `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=993d2b84e4f247c29d963e048bff5b7a`,
            method: 'GET',
            dataType: 'JSON',
            success: function(data){
                let estruturaNoticias = '';
                let noticias = data.articles;
                for(index in noticias){
                     estruturaNoticias += `
                    <div class="col s12 m4">
                    <div class="card">
                    <div class="card-image">
                        <img src="${noticias[index].urlToImage}">
                    </div>
                    <div class="card-content">
                    <span class="card-title">${noticias[index].title}</span>
                        <p>${noticias[index].content}</p>
                    </div>
                    <div class="card-action">
                        <a href="${noticias[index].url}"target= "_blank" >LER NOTÍCIA</a>
                    </div>
                    </div>
                    </div>
                    `;
                    
                }
                
                // renderizar conteudos
                $('#carregaNoticias').html(estruturaNoticias)
            }
        })
    }

    consultaNoticias();

}) //Fim do escopo jquery