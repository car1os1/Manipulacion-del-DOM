const navEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')
const hamMenu = document.querySelector('.menu')
const mobiMenu = document.querySelector('.mobile-menu')
const iconCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const selectProduct = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')




hamMenu.addEventListener('click', toogleMenu)
navEmail.addEventListener('click', toogleChange)
iconCarrito.addEventListener('click', toogleCarrito)
productDetailCloseIcon.addEventListener('click', closeDetailProduct)


function toogleChange() {
    const isMobileMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    deskMenu.classList.toggle('inactive')

    const isProductDetailClose = selectProduct.classList.contains('inactive')
    if (!isProductDetailClose) {
        selectProduct.classList.add('inactive')
    }


}

function toogleMenu() {
    const isMobileMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeDetailProduct()
    mobiMenu.classList.toggle('inactive')


}

function toogleCarrito() {
    const isMovileMenuClosed = mobiMenu.classList.contains('inactive')

    if (!isMovileMenuClosed) {
        mobiMenu.classList.add('inactive')

    }

    const isProductDetailClose = selectProduct.classList.contains('inactive')
    if (!isProductDetailClose) {
        selectProduct.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openDetailProduct() {
    shoppingCartContainer.classList.add('inactive')
    selectProduct.classList.remove('inactive')

}

function closeDetailProduct() {
    selectProduct.classList.add('inactive')
}

function toogleCarrito() {
    mobiMenu.classList.add('inactive');
    closeDetailProduct(); // Asegura que el detalle del producto se cierre al abrir el carrito.
    shoppingCartContainer.classList.toggle('inactive');
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
        productCard.addEventListener('click', openDetailProduct)

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


