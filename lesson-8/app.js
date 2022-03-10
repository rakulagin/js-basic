'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});


// мой код


let btn = document.querySelectorAll('.item-btn'); // кнопка add to cart
let cartNumber = document.querySelector('.cartIcon__number') // цифра в  значке корзины
let cartIcon = document.querySelector('.cartIcon') // иконка корзины для toggle hidden
let basket = document.querySelector('.basket'); // div корзины
let basketTotalEl = document.querySelector('.basketTotal'); // перед чем будет вставляться разметка
let totalEl = document.querySelector('.basketTotalValue'); // финальный итог в корзине

// слушает клик по корзине, скрывает и показывает div по клику
cartIcon.addEventListener('click', function () {
    basket.classList.toggle('hidden');
})

// перебирает кнопки и ставит обработчик по клику
btn.forEach(function(element) {
    element.addEventListener('click', btnClickHandler);
})

// обработчик клика
function btnClickHandler(event) {
    // прибавляет счетчик на корзине
    cartNumber.innerHTML++;
    // отлавливаем id товара
    let productId = +event.currentTarget.getAttribute('data-productId');
    //получаем карточку по клику
    let cartEl = document.querySelector(`.item-${productId}`);
    // получает по клику название продукта
    let itemName = cartEl.querySelector('.featuredName').innerText;
    // получает по клику цену продукта
    let itemPrice = +cartEl.querySelector('.featuredPrice span').innerText;
    
    totalEl.innerText = Number(totalEl.innerText) + itemPrice;

    addProductIntoBasket(itemName, itemPrice, productId)
}

//корзина

// добавляет новую строчку в корзину либо запускает функцию цвеличения кол-ва
function addProductIntoBasket(itemName, itemPrice, productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        // увеличиваем ИТОГО по одному товару
        let subTotal = document.querySelector(`.subtotalPrice${productId}`)
        subTotal.innerText = Number(subTotal.innerText) + itemPrice
    } else {
        renderNewProductInBasket (itemName, itemPrice, productId);
    }
}

// увеличивает счетчик кол-во
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

// разметка нового продукта в корзине
// в разметке я задал задал класс subtotalPrice, который будет даваться строке итого по одному товару. (строка 103)
function renderNewProductInBasket(itemName, itemPrice, productId) {
    let productRow = `
        <div class="basketRow">
            <div>${itemName}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div class="price">$${itemPrice}</div>
            <div>$ 
                <span class="subtotalPrice${productId}">${itemPrice}</span>
            </div>
        </div>
    `
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow)
}