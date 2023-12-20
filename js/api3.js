async function fdata(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log('Error',error)
    }
}
async function rdata(){
    const container = document.getElementById('card-con');
    const data = await fdata();

    data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card','col-md-4' ,'mb-4','ms-4');
        card.style.backgroundColor = '#CCFFF7';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const id =document.createElement('h3');
        id.classList.add('card-text');
        id.textContent = `ID: ${user.id}`;
        
        const title =document.createElement('p');
        title.classList.add('card-text');
        title.textContent = `Title: ${user.title}`;

        const completed =document.createElement('p');
        completed.classList.add('card-text');
        completed.textContent = `Completed: ${user.completed}`;


        cardBody.appendChild(id);
        cardBody.appendChild(title);
        cardBody.appendChild(completed);
        
        card.appendChild(cardBody);
        container.appendChild(card);
       
    });
}
rdata();