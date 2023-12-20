async function data (){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
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
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifycontent = "center";
    container.style.gap = "20px";

    

    d.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.background = "#f3f3f3";
        card.style.border = "1px solid rgb(7, 57, 88)";
        card.style.padding = "20px";
        card.style.width = "300px";
        card.style.borderRadius = "5px";
        

        

        const id = document.createElement('h2')
        id.textContent = 'id: ' + item.id;

        const name = document.createElement('p')
        name.textContent = 'Name: ' + item.name;
        name.style.color = 'red';

        const email = document.createElement ('p')
        email.textContent = 'Email:' + ' ' +  item.email;

        const body = document.createElement('p')
        body.textContent = 'Body: ' + ''  + item.body;

        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(body);
        container.appendChild(card);
        
    });
    
}
rdata();
