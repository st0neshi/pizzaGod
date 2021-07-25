let carts = document.querySelectorAll('.items');
let products = [
    {
        name: 'Pepperoni Pizza',
        tag: 'pepperoni-pizza',
        price: 15,
        inCart: 0
    },
    {
        name: 'BBQ Chicken Pizza',
        tag: 'bbq-chicken-pizza',
        price: 18,
        inCart: 0
    },
    {
        name: 'Chicken Burger',
        tag: 'chicken-burger',
        price: 10,
        inCart: 0
    },
    {
        name: 'Buffalo Wings',
        tag: 'buffalo-wings',
        price: 13,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    // console.log(productNumbers);

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1); // adding the products to the local storage
        document.querySelector('.account-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.account-cart span').textContent = 1;
    }
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.account-cart span').textContent = productNumbers;
    }
}

onLoadCartNumbers();