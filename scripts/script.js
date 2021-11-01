let dish ;
let drink;
let dessert;
let priceDish;
let priceDrink;
let priceDessert;
let priceTotal = 0;
let counterItens = 0;

function SelectedDish (element, nameDish, price) {
    const selected = document.querySelector('.dish .selected');
    if (selected !== null) {
        selected.classList.remove('selected');
    }
    else {
        counterItens = counterItens + 1;
    }
    priceDish= price;
    dish = nameDish;
    element.classList.add('selected');
    checkOrder(); 
}

function selectedDrink (element, nameDrink, price) {
    const selected = document.querySelector('.drink .selected');
    if (selected !== null) {
        selected.classList.remove('selected');
    } else {
        counterItens = counterItens + 1;
    }
    priceDrink = price;
    drink = nameDrink;
    element.classList.add('selected');
    checkOrder();
}

function selectedDessert (element, nameDessert, price) {
    const selected = document.querySelector('.dessert .selected');

    if (selected !== null) {
        selected.classList.remove('selected');
    } else {
        counterItens = counterItens + 1;
    }
    priceDessert = price;
    dessert = nameDessert;
    element.classList.add('selected');
    checkOrder();
}

function confirmOrder () {
    const request = document.querySelector('.overlay');
    request.classList.remove('hidden');

    priceTotal = priceDish + priceDrink + priceDessert;

    document.querySelector('.confirm-order .dish .name').innerHTML = dish;
    document.querySelector('.confirm-order .dish .price').innerHTML = priceDish.toFixed(2);
    document.querySelector('.confirm-order .drink .name').innerHTML = drink;
    document.querySelector('.confirm-order .drink .price').innerHTML = priceDrink.toFixed(2);
    document.querySelector('.confirm-order .dessert .name').innerHTML = dessert;
    document.querySelector('.confirm-order .dessert .price').innerHTML = priceDessert.toFixed(2);
    document.querySelector('.confirm-order .total .price').innerHTML = priceTotal.toFixed(2);
}

function cancelOrder () {
    const request = document.querySelector('.overlay');
    request.classList.add('hidden');
}

function sendWhatsapp () {
    let name = prompt ('Qual seu nome?');
    let address = prompt ('Qual seu endereço? (bairro, rua e número da casa)');
    let needsChange = prompt ('Precisará de troco? Se sim, para quanto?');

    const restaurantPhone = 5568999999999;
    const encodedText = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${dish} \n- Bebida: ${drink} \n- Sobremesa: ${dessert} \nTotal: R$ ${priceTotal.toFixed(2)} 
    \nNome: ${name} \nEndereço: ${address} \nTroco: ${needsChange}`);

    const urlWhatsapp = `https://wa.me/${restaurantPhone}?text=${encodedText}`;
    window.open(urlWhatsapp);    
}

function checkOrder () {
    if (counterItens === 3) {
        const activate = document.querySelector(".do-order");
        activate.classList.add('active');
        activate.innerHTML = 'Fazer pedido';
    }
}