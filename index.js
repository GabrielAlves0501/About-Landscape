const article = document.getElementById('article');

let botoes = document.querySelectorAll('button');


const articles = [
    {id:1, type: 'history', title: 'History', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nulla voluptate cupiditate quae magni ad? Esse aperiam aliquam cupiditate iure sunt aut possimus eveniet hic similique, voluptate labore odio aliquid.'},
    {id:2, type: 'vision', title: 'Vision', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis rem qui recusandae voluptates unde at natus quae impedit quasi tempora molestias nam fugiat cum laboriosam amet molestiae, dignissimos eaque!'},
    {id:3, type: 'goals', title: 'Goals', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque temporibus laudantium vel quod cum, dolor distinctio quae! Odit ad iste, aliquam atque temporibus nulla provident nesciunt beatae est minima.'} 
]

botoes.forEach(function(botao) {
   botao.addEventListener('click', function(){
        botoes.forEach(function(outroBotao) {
            outroBotao.classList.remove('selecionado');
        });
        this.classList.add('selecionado')
        
   })
})


const list = document.createElement('ul');

const listItem = document.createElement('li');

for(let i = 0; i < articles.length; i++){
    if(articles[i].id === 1){
        const title = document.createElement('h1');
        title.innerText = articles[i].title;

        const description = document.createElement('span');
        description.innerText = articles[i].description;

        listItem.appendChild(title);
        listItem.appendChild(description);

        list.appendChild(listItem);

        article.appendChild(list);
    }   
}

function handleFilterButtonClick(artigo){

   const listItem = document.createElement('li');

   clearList();

   if(artigo === 'history'){
        
        for(let i = 0; i < articles.length; i++){
            if(articles[i].id === 1){
                const title = document.createElement('h1');
                title.innerText = articles[i].title;

                const description = document.createElement('span');
                description.innerText = articles[i].description;

                listItem.appendChild(title);
                listItem.appendChild(description);

                list.appendChild(listItem);

                article.appendChild(list);
            }   
        }
   }


   if(artigo === 'vision'){
        
        for(let i = 0; i < articles.length; i++){
            if(articles[i].id === 2){
                const title = document.createElement('h1');
                title.innerText = articles[i].title;

                const description = document.createElement('span');
                description.innerText = articles[i].description;

                listItem.appendChild(title);
                listItem.appendChild(description);

                list.appendChild(listItem);

                article.appendChild(list);
            }
        }
   }

   
   if(artigo === 'goals'){

        for(let i = 0; i < articles.length; i++){
            if(articles[i].id === 3){
                const title = document.createElement('h1');
                title.innerText = articles[i].title;

                const description = document.createElement('span');
                description.innerText = articles[i].description;

                listItem.appendChild(title);
                listItem.appendChild(description);

                list.appendChild(listItem);

                article.appendChild(list);   
            }
        }
   }
}

function clearList(){
        // Se 'article' possui 'list', remove todos os filhos de 'list'
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
}