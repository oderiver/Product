// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXFkecTMS63pTQIgu4Q9Xf83vByxd1eHI",
    authDomain: "organicstore-265fa.firebaseapp.com",
    databaseURL: "https://organicstore-265fa.firebaseio.com",
    projectId: "organicstore-265fa",
    storageBucket: "organicstore-265fa.appspot.com",
    messagingSenderId: "140562411338"
  };
  firebase.initializeApp(config);
// GLOBAL
var products=[];
var carItems=[];
var cart_n = document.getElementById('cart_n');
// DIVS
var fruitDIV = document.getElementById('fruitDIV');
var juiceDIV = document.getElementById('juiceDIV');
var saladDIV = document.getElementById('saladDIV');
//INFORMATION
var FRUIT=[
    {name:'Apple', price:1},
    {name:'Orange', price:1},
    {name:'Cherry', price:1},
    {name:'Strawberry', price:1},
    {name:'Kivi', price:1},
    {name:'Banana', price:1}
];
var JUICE=[
    {name:'Juice #1', price:10},
    {name:'Juice #2', price:11},
    {name:'Juice #3', price:12}
];
var SALAD=[
    {name:'Salad #1', price:11},
    {name:'Salad #2', price:12},
    {name:'Salad #3', price:15}
];
//HTML
function HTMLfruitProduct(con){
    let URL = `img/fruits/fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `
        <div class="col-md-4">
            <div class="card_n mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                            <button id="${btn}" type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small class="text-muted">Free shopping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLjuiceProduct(con){
    let URL = `img/juice/juice${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4">
            <div class="card_n mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${JUICE[con-1].name}</p>
                    <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                            <button id="${btn}" type="button" onclick="cart2('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small class="text-muted">Free shopping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLfruitProduct(con){
    let URL = `img/fruits/fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `
        <div class="col-md-4">
            <div class="card_n mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Buy</button>
                            <button id="${btn}" type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small class="text-muted">Free shopping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

//RENDER
function render(){
    for (let index = 1; index <= 6; index++){
        fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++){
        juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`;
    }
}