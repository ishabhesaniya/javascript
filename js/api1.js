async function data (){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const d = await response.json();
        return d;
    }
    catch(error){
        console.error('Error',error)
    }
}
async function rdata() {
    const container = document.querySelector('.container');
    const d = await data();

    d.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const id = document.createElement('h2')
        id.textContent = 'id: ' + item.id;

        const title = document.createElement('h2')
        title.textContent = 'Title: ' + item.title;

        const url = document.createElement ('p')
        url.textContent = 'Url:' + ' ' +  item.url;

        const thumbnailUrl = document.createElement('p')
        thumbnailUrl.textContent = 'thumbnailUrl: ' + ''  + item.thumbnailUrl;

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(url);
        card.appendChild(thumbnailUrl);
        container.appendChild(card);
        
    });
    
}
rdata();