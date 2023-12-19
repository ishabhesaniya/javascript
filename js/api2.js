async function checkdata(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
    catch{
        console.error('Error',error);
    }
}

async function renderData() {
    const container = document.querySelector('.container');
    const data = await checkdata();

    data.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')

        const id = document.createElement('h2')
        id.textContent = 'id: ' + item.id;

        
    });

    card.appendChild(id);
    container.appendChild(card);
}
renderData();
