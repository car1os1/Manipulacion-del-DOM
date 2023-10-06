const navEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')
const hamMenu = document.querySelector('.menu')
const mobiMenu = document.querySelector('.mobile-menu')
const iconCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')




hamMenu.addEventListener('click', toogleMenu)
navEmail.addEventListener('click', toogleChange)
iconCarrito.addEventListener('click', toogleCarrito)



function toogleChange() {
    const isMobileMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }


    deskMenu.classList.toggle('inactive')
}

function toogleMenu() {
    const isMobileMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }


    mobiMenu.classList.toggle('inactive')
}

function toogleCarrito() {
    const isMovileMenuClosed = mobiMenu.classList.contains('inactive')

    if (!isMovileMenuClosed) {
        mobiMenu.classList.add('inactive')

    }

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Celular',
    price: 200,
    Image: 'https://images.pexels.com/photos/3756877/pexels-photo-3756877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Bike',
    price: 400,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Monitor',
    price: 600,
    Image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')




        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$' + product.price

        const productName = document.createElement('p')
        productName.innerHTML = product.name

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)



        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')

        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')


        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)


        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)


