let openShopping = document.querySelector('.shopping');

let closeShopping = document.querySelector('.closeShopping');

let list = document.querySelector('.list');

let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');

let total = document.querySelector('.total');

let quantity = document.querySelector('.quantity');

 

openShopping.addEventListener('click', ()=>{

    body.classList.add('active');

})

closeShopping.addEventListener('click', ()=>{

    body.classList.remove('active');

})

 

let products = [

    {

        id: 1,

        name: 'CAKE DONUT',

        image:'cakedonut.jpeg',

        price: 320

    },

    {

        id: 2,

        name: 'CHOCOLATE DONUTS',

        image: 'chocolatedonuts.jpeg',

        price: 400

    },

    {

        id: 3,

        name: 'CRULLER DONUT',

        image: 'crullerdonut.jpeg',

        price: 250

    },

    {

        id: 4,

        name: 'FRIED DONUTS',

        image: 'frieddonutholes.jpg',

        price: 180

    },

    {

        id: 5,

        name: 'GOURMET DONUT',

        image: 'gourmetdonut.jpeg',

        price: 320

    },

    {

        id: 6,

        name: 'LONG JOHN DONUT',

        image: 'longjohndonut.jpeg',

        price: 520

    }

];

let listCards = [];

function initApp(){

    products.forEach((value, key) =>{

        let newDiv = document.createElement('div');

        newDiv.classList.add('item');

        newDiv.innerHTML = `

            <img src="${value.image}" >

            <div class="title">${value.name}</div>

            <div class="price">${value.price.toLocaleString()}</div>

            <button onclick="addToCard(${key})">Add To Card</button>`;

        list.appendChild(newDiv);

    })

}

initApp();

function addToCard(key){

    if(listCards[key] == null){

        listCards[key] = JSON.parse(JSON.stringify(products[key]));

        listCards[key].quantity = 1;

    }

    reloadCard();

}

function reloadCard(){

    listCard.innerHTML = '';

    let count = 0;

    let totalPrice = 0;

    listCards.forEach((value, key)=>{

        totalPrice = totalPrice + value.price;

        count = count + value.quantity;

        if(value != null){

            let newDiv = document.createElement('li');

            newDiv.innerHTML = `

                <div><img src="${value.image}"/></div>

                <div>${value.name}</div>

                <div>${value.price.toLocaleString()}</div>

                <div>

                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>

                    <div class="count">${value.quantity}</div>

                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

                </div>`;

                listCard.appendChild(newDiv);

        }

    })

    total.innerText = totalPrice.toLocaleString();

    quantity.innerText = count;

}

function changeQuantity(key, quantity){

    if(quantity == 0){

        delete listCards[key];

    }else{

        listCards[key].quantity = quantity;

        listCards[key].price = quantity * products[key].price;

    }

    reloadCard();

}